// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // css: ["~/assets/css/main.css"],
    srcDir: "src/",
    typescript: {
        shim: false,
    },
    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },
    modules: [/*, "nuxt-svgo"*/ "nuxt-svg-transformer"],
});
