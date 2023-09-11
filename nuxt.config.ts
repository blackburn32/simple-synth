export default defineNuxtConfig({
    devtools: {enabled: true},
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
