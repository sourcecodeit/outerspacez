// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  runtimeConfig: {
    public: {
      planets: 30
    }
  },
  app: {
    head: {
      title: 'Outer Space Z',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      script: [
        { src: '/particles.min.js' },
        { src: '/warp.min.js' }
      ]
    }    
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'maz-ui/nuxt',
    'nuxt-icon',
    'nuxt-svgo'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Audiowide: true
    },
    download: false
  },
  mazUi: {
    injectComponents: true,
    injectCss: true,
    injectAos: {
      injectCss: true,
    },
    injectUseThemeHandler: true,
    devtools: true,
  },
})
