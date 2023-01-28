import PostCard from '@components/PostCard'
import { TPosts, TTags } from '@/src/types'
import { useRouter } from 'next/router'
import React, {CSSProperties, useEffect, useState} from 'react'
import { FixedSizeList } from 'react-window';
import css from "styled-jsx/css";

type Props = {
  q: string
  tags: TTags
  posts: TPosts
}

const PostList: React.FC<Props> = ({ q, posts, tags }) => {
  const router = useRouter()
  const [filteredPosts, setFilteredPosts] = useState(posts)

  const currentTag = `${router.query.tag || ``}` || 'All'
  const currentOrder = `${router.query.order || ``}` || 'desc'

  useEffect(() => {
    setFilteredPosts(() => {
      let filteredPosts = posts
      // keyword
      filteredPosts = filteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(' ') : ''
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(q.toLowerCase())
      })

      // tag
      if (currentTag !== 'All') {
        filteredPosts = filteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }
      // order
      if (currentOrder !== 'desc') {
        filteredPosts = filteredPosts.reverse()
      }

      return filteredPosts
    })
  }, [q, currentTag, currentOrder])

  const Row = ({ index, style }: { index: number; style: CSSProperties}) => {
    return (
      <div style={style}>
        <PostCard post={filteredPosts[index]} />
      </div>
    )
  }

  return (
    <>
      <div className="my-2">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        <FixedSizeList
            height={1260}
            itemCount={filteredPosts.length}
            itemSize={200}
            width={'inherit'}
            className={'no-scrollbars'}
            >
            {Row}
        </FixedSizeList>
      </div>
    </>
  )
}


export default PostList
