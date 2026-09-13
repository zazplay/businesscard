import { brand } from './brands';

export const links = {
  telegram: 'https://t.me/zazplay',
  github: 'https://github.com/zazplay',
  linkedin: 'https://www.linkedin.com/in/viktor-zhuk-fullstack/',
};

export const profile = {
  name: 'Viktor Zhuk',
  role: 'Full-stack engineer · TypeScript · React + NestJS',
  intro:
    'Full-stack engineer, TypeScript end to end. Three production systems in the last two years: a self-service payment platform, a smart equipment locker and an escrow marketplace — each from an empty repository to real users and real money. Kiosk UIs, hardware integration, payment providers, cloud services and the consoles that operate them. Open to full-stack and architecture roles.',
};

export const socials = [
  { id: 'telegram', label: 'Telegram', href: links.telegram, brand: brand.telegram },
  { id: 'github', label: 'GitHub', href: links.github, brand: brand.github },
  { id: 'linkedin', label: 'LinkedIn', href: links.linkedin, brand: brand.linkedin },
] as const;
