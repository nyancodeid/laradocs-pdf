import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3'
    }),
    Components({
      dts: true,
      resolvers: [
        IconsResolver(),
      ],
    }),
  ]
});
