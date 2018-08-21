module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BOdev V2 front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'BOdev Porfolio on Nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#6bbdde' },
  css: [
    '~/assets/scss/app.scss',
  ],
  /*
  ** Build configuration
  */
  build: {
    watch: ['app'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: ['loading'],
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {}
};
