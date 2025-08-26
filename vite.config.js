import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/fourchest/", // Replace 'my-repo' with your actual repository name
	plugins: [tailwindcss()],
});
