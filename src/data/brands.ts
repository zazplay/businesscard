import {
  siFramer,
  siGit,
  siGithub,
  siI18next,
  siJsonwebtokens,
  siMongodb,
  siMongoose,
  siNestjs,
  siNodedotjs,
  siPostgresql,
  siRaspberrypi,
  siReact,
  siReactquery,
  siReactrouter,
  siRedux,
  siShadcnui,
  siSocketdotio,
  siSwagger,
  siTailwindcss,
  siTelegram,
  siTypeorm,
  siTypescript,
  siVercel,
  siVite,
  siZod,
} from 'simple-icons';
import type { Brand } from '../types';

// LinkedIn and Playwright were dropped from simple-icons after v11; paths copied from simple-icons@11.
const siLinkedin: Brand = {
  title: 'LinkedIn',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};

const siPlaywright: Brand = {
  title: 'Playwright',
  path: 'M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z',
};

export const brand = {
  framer: siFramer,
  git: siGit,
  github: siGithub,
  i18next: siI18next,
  jwt: siJsonwebtokens,
  linkedin: siLinkedin,
  mongodb: siMongodb,
  mongoose: siMongoose,
  nestjs: siNestjs,
  node: siNodedotjs,
  playwright: siPlaywright,
  postgresql: siPostgresql,
  raspberrypi: siRaspberrypi,
  react: siReact,
  reactquery: siReactquery,
  reactrouter: siReactrouter,
  redux: siRedux,
  shadcn: siShadcnui,
  socketio: siSocketdotio,
  swagger: siSwagger,
  tailwind: siTailwindcss,
  telegram: siTelegram,
  typeorm: siTypeorm,
  typescript: siTypescript,
  vercel: siVercel,
  vite: siVite,
  zod: siZod,
} satisfies Record<string, Brand>;
