export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'financial',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

	css: ["~/styles/global.scss"],

  plugins: [
		{ src: "~/plugins/mg-animation.client.js" },
	],

	router: {
		base: '/',
		mode: 'hstory',
		extendRoutes(routes, resolve) {
			routes.push({
				name: 'error',
				path: '*',
				component: resolve(__dirname, 'pages/404.vue'),
			})
		}
	},

  components: true,

  buildModules: [],

  modules: [],

  build: {}
}
