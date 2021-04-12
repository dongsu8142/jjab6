const sveltePreprocess = require("svelte-preprocess");
const pkg = require("./package.json");
const node = require("@sveltejs/adapter-node");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
      logLevel: "info", // 'info' | 'warn' | 'error' | 'silent'
      server: {
        port: 80,
      },
    },
  },
};
