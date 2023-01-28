const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'sian',
    image: '/avatar.png',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'frontend developer',
    bio: 'I develop everything using node.',
    email: 'siyeonleeme@gmail.com',
    linkedin: '',
    github: 'siyeons',
    instagram: '',
  },
  projects: [
    {
      name: '',
      href: ''
    }
  ],
  // blog setting (required)
  blog: {
    title: 'sian-log',
    description: 'welcome to sian-log!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://sian-log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
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
  utterances: {
    enable: true,
    config: {
      repo: 'siyeons/sian-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
