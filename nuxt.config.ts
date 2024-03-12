// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app: {
    head: {
      script: [
        { src: '/particles.min.js' }
      ]
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'maz-ui/nuxt'
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
