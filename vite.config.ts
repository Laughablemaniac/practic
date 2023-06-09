import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons(),
    Components({
      resolvers: [IconsResolver()],
    }),
  ],
  test: {
    environment: 'happy-dom',
  },
});
