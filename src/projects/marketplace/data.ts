import {
  Activity,
  Banknote,
  Bell,
  LayoutGrid,
  Monitor,
  Package,
  RefreshCw,
  Server,
  Settings,
  ShieldCheck,
  TriangleAlert,
  Users,
  WifiOff,
} from 'lucide-react';
import { tech } from '../../data/tech';
import type { FlowNodeData, Overview, Proof, StackGroup } from '../../types';

export const escrow: { inputs: FlowNodeData[]; caption: string; outputs: FlowNodeData[] } = {
  inputs: [
    { icon: Users, title: 'Buyer', caption: 'tops up · pays' },
    { icon: Package, title: 'Seller', caption: 'ships the item' },
  ],
  caption:
    'Debit and hold happen in one atomic operation — a balance check can never drift from the write. Confirm, expire, dispute, cancel and refund are separate paths, and money is never lost on any of them.',
  outputs: [
    { icon: Banknote, title: 'Released', caption: 'seller − fee' },
    { icon: TriangleAlert, title: 'Disputed', caption: 'moderator decides' },
    { icon: RefreshCw, title: 'Refunded', caption: 'back to buyer' },
  ],
};

export const reliability: Proof[] = [
  {
    icon: ShieldCheck,
    title: 'Signed webhooks',
    text: 'Every provider callback is verified by signature and applied idempotently — a repeat never credits twice.',
  },
  {
    icon: RefreshCw,
    title: 'Reconciliation',
    text: 'Every 30 minutes the system hunts for stranded payments and checks them against the provider; nightly sweeps catch hung payouts.',
  },
  {
    icon: WifiOff,
    title: 'Circuit breaker',
    text: 'Five consecutive errors and the provider is cut off automatically, then retried five minutes later.',
  },
  {
    icon: Bell,
    title: 'Balance alerts',
    text: 'A low provider balance raises an alert in the panel, by e-mail and in Telegram at once.',
  },
];

/** Sample of the notification settings: [in-app, mobile, e-mail]. */
export const notificationEvents: { event: string; channels: [boolean, boolean, boolean] }[] = [
  { event: 'Order paid', channels: [true, true, true] },
  { event: 'Escrow released', channels: [true, true, true] },
  { event: 'Dispute opened', channels: [true, true, true] },
  { event: 'New message', channels: [true, true, false] },
  { event: 'Review received', channels: [true, false, false] },
  { event: 'Payout sent', channels: [true, true, true] },
  { event: 'Referral bonus', channels: [true, false, true] },
  { event: 'Listing removed', channels: [true, true, false] },
];

export const overview: Overview = {
  period: '2025—2026 · 5 months',
  title: 'Marketplace for game assets',
  badge: '3 apps · 95% of commits',
  summary:
    "Players buy and sell accounts, items, in-game currency and services. The platform keeps the buyer's money in escrow until delivery is confirmed, so neither side can cheat the other — with a wallet, provider top-ups and payouts, buyer–seller chat, reviews, seller verification, referrals, disputes and a 16-section admin panel behind it.",
  stats: [
    { value: '3', label: 'applications' },
    { value: '~95k', label: 'lines of TypeScript' },
    { value: '230+', label: 'API endpoints' },
    { value: '95%', label: 'of 310+ commits' },
  ],
  work: [
    {
      icon: Server,
      title: 'Backend — deals, money, chat',
      text: 'Atomic debit-and-hold escrow with confirm, expiry, dispute, cancel and refund paths; wallet top-ups and payouts through crypto and card providers; signed idempotent webhooks with reconciliation and a circuit breaker; real-time chat with read receipts; 22 notification events across three channels; a product-type builder that lets admins define listing fields without a developer.',
      tags: ['NestJS 11', 'MongoDB', 'Socket.IO', 'JWT + Google', 'Swagger', 'Cron'],
      meta: '260 files · ~30k lines · 35 modules · 238 endpoints · 27 collections',
    },
    {
      icon: Monitor,
      title: 'Storefront — the player-facing site',
      text: 'Catalog, game and listing pages, search across items, games and sellers, listing forms that rebuild themselves per product type, checkout and deal pages with auto-release timers, wallet with charts, live chats, public seller profiles with reviews and verification, referrals — plus readable URLs, 705 permanent redirects, a sitemap built from live data and two interface languages.',
      tags: ['React 18', 'Vite', 'styled-components', 'Zustand', 'i18next', 'Framer Motion'],
      meta: '207 files · ~48k lines · ~25 screens',
    },
    {
      icon: LayoutGrid,
      title: 'Admin panel — running the platform',
      text: 'Sixteen sections: users and finance with manual adjustments, products and the product-type field editor, drag-ordered games, categories and recommendations, deals and payments with provider health, webhook logs, manual status checks and a "needs attention" queue, complaints, reviews, seller verification, support chat and inbound e-mail answered straight from the panel.',
      tags: ['React 19', 'MUI DataGrid', 'dnd-kit', 'Quill'],
      meta: '78 files · ~17k lines · 16 sections',
    },
  ],
  footnote: 'All figures counted on my version of the code — later work by another developer is not included.',
};

export const proofs: Proof[] = [
  {
    icon: Banknote,
    title: 'Money logic',
    text: 'Escrow, commissions, refunds and manual adjustments — written so that no path can lose or double-count a balance.',
  },
  {
    icon: Activity,
    title: 'Fintech-grade integrations',
    text: 'Signatures, idempotency, scheduled reconciliation and automatic provider cut-off around third-party payment APIs.',
  },
  {
    icon: Settings,
    title: 'Configurable product',
    text: 'A product-type builder and referral rules that admins change in the panel instead of filing a ticket.',
  },
  {
    icon: Users,
    title: 'Product thinking',
    text: 'Readable URLs, 705 redirects without losing rankings, a live sitemap, analytics on the events that matter.',
  },
];

export const stack: StackGroup[] = [
  {
    title: 'Frontend',
    items: [
      tech('typescript'),
      tech('react', 'React 18 / 19'),
      tech('vite'),
      'styled-components',
      'Zustand',
      'MUI DataGrid',
      tech('framer'),
      tech('i18next'),
    ],
  },
  {
    title: 'Backend & data',
    items: [
      tech('nestjs', 'NestJS 11'),
      tech('mongodb'),
      tech('mongoose'),
      tech('jwt', 'JWT + Google auth'),
      tech('swagger'),
      'Scheduled jobs',
    ],
  },
  {
    title: 'Realtime & payments',
    items: [tech('socketio'), 'Signed webhooks', 'Idempotent ledger', 'Circuit breaker', 'Reconciliation jobs'],
  },
  {
    title: 'Delivery & growth',
    items: [tech('telegramBot'), 'Transactional e-mail', 'S3 storage + CDN', '705 SEO redirects', 'Live sitemap'],
  },
];
