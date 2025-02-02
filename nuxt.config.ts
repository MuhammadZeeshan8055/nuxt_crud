// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title:'Nuxt Js',
      meta:[
        {charset: 'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
        { hid: 'description', name: 'description', content: 'NUXT 3 Crud application meta desc'},
        { name: 'format-detection', content:'telephone-no'}
      ],
      link:[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        }
      ],
      script:[
        {
          src:'https://code.jquery.com/jquery-3.7.1.slim.js',
          type: 'text/javascript',
        },
        {
          src:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          type: 'text/javascript',
        }
      ]
      
    }
  }

})
