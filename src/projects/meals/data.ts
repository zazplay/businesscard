import { Calculator, Clock, Languages, LayoutGrid, Monitor, RefreshCw, Server, Users } from 'lucide-react';
import { tag, tech } from '../../data/tech';
import type { Overview, Proof, StackGroup } from '../../types';

export const overview: Overview = {
  period: '2026 · 7 months',
  title: 'Meal subscription service',
  badge: 'Two engineers · subscriptions and billing mine',
  summary:
    'A client picks a plan, delivery days and a term, pays by card — and food arrives on schedule every week, with an optional weekend set riding along. Orders walk from review through the kitchen to a courier at the door, while the client pauses the subscription, swaps the plan or changes address and card from their account.',
  stats: [
    { value: '3', label: 'applications' },
    { value: '~62k', label: 'lines of TypeScript' },
    { value: '118', label: 'API endpoints' },
    { value: '69%', label: 'of 350 commits' },
  ],
  work: [
    {
      icon: Server,
      title: 'Backend — subscriptions, money, schedule',
      text: 'Subscriptions with deferred changes, one price formula for day, week and month, renewals charged to a saved card every cycle, login by one-time SMS code, order and delivery stages with a full history, and five scheduled jobs that unstick whatever hangs.',
      tags: [tag('nestjs', 'NestJS 11'), tag('mongodb'), tag('socketio'), 'Card payments', tag('swagger'), 'Cron'],
      meta: '151 files · ~18k lines · 20 modules · 118 endpoints · 22 collections',
    },
    {
      icon: Monitor,
      title: 'Storefront — plan, checkout, account',
      text: '23 screens: a plan builder that prices itself as you pick days and term, checkout with a saved card, and an account where the client pauses, swaps the plan, edits address and card, and reads the delivery calendar — in four languages, one of them right-to-left.',
      tags: [tag('react', 'React 19'), tag('vite'), tag('tailwind', 'Tailwind 4'), tag('framer'), tag('socketio')],
      meta: '129 files · ~31k lines · 23 screens',
    },
    {
      icon: LayoutGrid,
      title: 'Admin panel — orders, plans, content',
      text: 'Dashboard with charts, orders moving through kitchen and delivery stages, plans and weekly menus, users and staff, transactions, reviews, news and videos — of the 18 sections these are the ones I built.',
      tags: [tag('react', 'React 19'), tag('antdesign'), 'Zustand', tag('socketio')],
      meta: '49 files · ~13k lines · 18 sections',
    },
    {
      icon: Users,
      title: "Support, roles and promo codes — colleague's work",
      text: 'Tickets with a live queue, roles and permissions, promo codes, partnership and contact forms were written by the other engineer on the project, across all three applications.',
      external: true,
    },
  ],
  footnote: 'Figures cover the whole codebase; 241 of the 350 commits are mine.',
};

export const proofs: Proof[] = [
  {
    icon: RefreshCw,
    title: 'Money that repeats',
    text: 'Saved cards, a charge every cycle, refunds — and a job that rescues any subscription the payment provider left hanging.',
  },
  {
    icon: Calculator,
    title: 'One price, one formula',
    text: 'Day, week and month prices, plan discounts and add-on rules live on the server; the screen only shows what the server has just recalculated.',
  },
  {
    icon: Clock,
    title: 'Changes that wait their turn',
    text: 'Pause, plan swap, address and card changes take effect from the next cycle, so a week the client already paid for never changes under them.',
  },
  {
    icon: Languages,
    title: 'Four languages, one mirrored',
    text: 'Hebrew flips the whole layout — direction, order, arrows and spacing — not just the strings.',
  },
];

/** The delivery week a client assembles: three delivery days plus the weekend set. */
export const week = [
  { day: 'Mon', kind: 'delivery' },
  { day: 'Tue', kind: 'delivery' },
  { day: 'Wed', kind: 'rest' },
  { day: 'Thu', kind: 'delivery' },
  { day: 'Fri', kind: 'rest' },
  { day: 'Sat', kind: 'addon' },
  { day: 'Sun', kind: 'rest' },
] as const;

export const bill = [
  { label: 'Plan · 3 days × 4 weeks', value: '◈ 1 120' },
  { label: 'Weekend set', value: '◈ 160' },
  { label: 'Promo · −10%', value: '−◈ 128', accent: true },
];

export const billTotal = { label: 'Total', value: '◈ 1 152' };

export type Stage = { label: string; state: 'done' | 'current' | 'pending' };

export const orderStages: Stage[] = [
  { label: 'review', state: 'done' },
  { label: 'in work', state: 'done' },
  { label: 'kitchen', state: 'done' },
  { label: 'confirmed', state: 'done' },
  { label: 'closed', state: 'done' },
];

export const deliveryStages: Stage[] = [
  { label: 'packed', state: 'done' },
  { label: 'courier', state: 'current' },
  { label: 'delivered', state: 'pending' },
];

export const history = [
  { time: '09:40', event: 'taken into work', who: 'operator' },
  { time: '11:05', event: 'sent to the kitchen', who: 'operator' },
  { time: '12:30', event: 'kitchen confirmed', who: 'kitchen' },
  { time: '17:40', event: 'handed to the courier', who: 'courier' },
];

export const jobs = [
  { every: '1 min', does: 'moves expired subscriptions to the status they belong in' },
  { every: '5 min', does: 'cancels orders that were never paid' },
  { every: '10 min', does: 'revives subscriptions stuck half-way through a renewal' },
  { every: '30 min', does: 'charges saved cards for the next cycle' },
  { every: 'daily', does: "sends the morning reminders: delivery tomorrow, add-on cut-off, upcoming charge, next week's menu" },
];

export const stack: StackGroup[] = [
  {
    title: 'Frontend',
    items: [
      tech('typescript'),
      tech('react', 'React 19'),
      tech('vite'),
      tech('tailwind', 'Tailwind 4'),
      tech('framer'),
      tech('antdesign'),
      'Zustand',
    ],
  },
  {
    title: 'Backend & data',
    items: [tech('nestjs', 'NestJS 11'), tech('mongodb'), tech('swagger'), 'Scheduled jobs'],
  },
  {
    title: 'Payments & realtime',
    items: [tech('socketio'), 'Card payments', 'Saved cards', 'Signed webhooks', 'SMS one-time codes'],
  },
  {
    title: 'Delivery & reach',
    items: ['E-mail reminders', 'Object storage', 'Four languages', 'RTL layout'],
  },
];
