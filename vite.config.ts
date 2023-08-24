import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
    alias: {
			"@": resolve(__dirname, "src"),
			"#layouts": resolve(__dirname, "src/layouts"),
			"#modules": resolve(__dirname, "src/modules"),
      "#shared": resolve(__dirname, "src/shared"),
		}
  }
})
