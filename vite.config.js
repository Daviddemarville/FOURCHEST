// vite.config.js
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  // base "/" OK sur Vercel (utile surtout pour GitHub Pages)
  base: "/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index:       resolve(__dirname, "index.html"),
        about:       resolve(__dirname, "about.html"),
        account:     resolve(__dirname, "account.html"),
        restaurant:  resolve(__dirname, "restaurant.html"),
        order:       resolve(__dirname, "order.html"),
        finalOrder:  resolve(__dirname, "final-order.html"),
        log:         resolve(__dirname, "log.html"),
      },
    },
  },
});
