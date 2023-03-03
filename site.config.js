const CONFIG = {
  // profile setting (required)
  profile: {
    name: '서영호',
    image: '/title3.png',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Data Engineering',
    bio: '초보개발자의 기술블로그!',
    email: 'ryanyh.dev@gmail.com',
    linkedin: '',
    github: 'syh-RYAN',
    instagram: '',
  },
  projects: [
    {
      name: '포토폴리오',
      href: 'https://ryansyh.notion.site/SEO-YOUNG-HO-1f0249451f6a42eea60bbf2d4186a681',
    }
   ],
    projects1:[
    {
      name: 'PlayData',
      href: 'https://github.com/syh-RYAN/PlayData.git',
    }
  ],
  // blog setting (required)
  blog: {
    title: '귀여운 영호처럼',
    description: 'welcome to ryanyh-log!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://ryanyh-log.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  // utterances: {
  //   enable: false,
  //   config: {
  //     repo: 'siyeons/sian-log',
  //     'issue-term': 'og:title',
  //     label: '💬 Utterances',
  //   }
  // },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
