import redirectSSL from 'redirect-ssl'

const isProduction = process.env.NODE_ENV === 'production'
const isStaging = process.env.NODE_ENV === 'staging'
const title =
  process.env.NUXT_ENV_APP_TITLE ||
  'TwoRentals - Airbnb Short-Term & Vacation Rental Property Management Software'
const description =
  process.env.NUXT_ENV_APP_DESCRIPTION ||
  'TwoRentals is a property management software. It is used by property managers to manage Short-Term Rentals and Vacation Rentals listed on multiple platforms such as Airbnb, HomeAway, and Booking.com.'
const siteName = process.env.NUXT_ENV_DOMAIN_NAME || 'tworentals.com'

const metaTags = isProduction
  ? [
    {
      name: 'googlebot',
      content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    },
    {
      name: 'bingbot',
      content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    }
  ]
  : [
    { name: 'robots', content: 'noindex' },
    { name: 'googlebot', content: 'noindex' }
  ]

export default {
  telemetry: false,

  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title,
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      // { hid: 'fb:app_id', name: 'fb:app_id', content: '12873892173892' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'title', name: 'title', content: title },
      { hid: 'description', name: 'description', content: description },
      { hid: 'site_name', name: 'site_name', content: siteName },
      { hid: 'image', property: 'image', content: '/favicon.png' },
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'og:description', name: 'og:description', content: description },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:image', name: 'og:image', content: '/favicon.png' },
      ...metaTags
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/*', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue2-smooth-scroll.js', mode: 'client' },
    { src: '~/plugins/vue-toastification.js', mode: 'client' },
    { src: '~/plugins/vee-validate.js', mode: 'client' }
  ],

  serverMiddleware: [redirectSSL.create({ enabled: !!isProduction })],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/dotenv',
      {
        filename:
          !isProduction && !isStaging ? '.env' : `.env.${process.env.NODE_ENV}`
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    // id: isProduction ? 'G-67ZFYQ1RMC' : null,
    id: 'G-00R811L5Q9',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['tworentals.com']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false // disable if you don't want to track each page route with router.afterEach(...).
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  publicRuntimeConfig: {
    API_URL: process.env.NUXT_ENV_API_URL,
    DOMAIN_NAME: process.env.NUXT_ENV_DOMAIN_NAME,
    SENTRY_DNS: process.env.NUXT_ENV_SENTRY_DNS,
    DEMO_REQUEST_ENABLED: process.env.NUXT_ENV_DEMO_REQUEST_ENABLED
  }
}
