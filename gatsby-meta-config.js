module.exports = {
  title: `Keyman Log`,
  description: `키맨의 개발일지 `,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.keyman.io`,
  ogImage: `/keyman.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `신주영`,
    bio: {
      role: `개발자`,
      description: ['꾸준히 기록하는', '꾸준히 행동하는', '꾸준히 함께하는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/S-jooyoung`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `jooyoung.dev@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.09 ~ 2022.02',
        activity: '첨단정보통신산업기술원 4기',
      },
      {
        date: '2015.03 ~ 2021.08',
        activity: '영남대학교 정보통신공학과',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
