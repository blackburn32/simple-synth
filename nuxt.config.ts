export default defineNuxtConfig({
    devtools: {enabled: false},
    app: {
        baseURL: '/simple-synth/',
        head: {
            title: 'Simple Synth',
            meta: [
                {name: 'description', content: 'A minimal synthesizer.'},
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/simple-synth/favicon.svg',
                },
            ],
        },
    },
    modules: [
        'nuxt-icon',
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ssr: false,
});
