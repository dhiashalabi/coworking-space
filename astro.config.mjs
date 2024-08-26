import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    "site": "https://coworking-space.dhiashalabi.info",
    base: 'coworking-space',
    integrations: [tailwind()],
});
