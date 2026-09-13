import {
  Banknote,
  Cpu,
  CreditCard,
  Database,
  LayoutGrid,
  Monitor,
  Package,
  Printer,
  QrCode,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { tag, tech } from '../../data/tech';
import type { Overview, Proof, StackGroup, Stat } from '../../types';

export const overview: Overview = {
  period: '2025 — 2026',
  title: 'Self-service payment platform',
  badge: 'Sole engineer · architecture to delivery',
  summary:
    'A floor-standing kiosk takes cash, bank cards and QR-coded documents; operators run the whole fleet from a web console. I designed the architecture and wrote four applications — kiosk UI, on-board hardware server, cloud core and the operator console — 91% of 840+ commits over nine months.',
  stats: [
    { value: '4', label: 'applications' },
    { value: '~79k', label: 'lines of TS' },
    { value: '300+', label: 'API endpoints' },
    { value: '91%', label: 'of 840+ commits' },
  ],
  work: [
    {
      icon: Monitor,
      title: 'Kiosk interface',
      text: 'Ten screens of the payment flow, animated transitions, live status. Only the payment methods whose hardware is currently available.',
      tags: [tag('react', 'React 19'), tag('vite'), tag('framer'), tag('socketio')],
      meta: '42 files · ~4.9k lines',
    },
    {
      icon: Cpu,
      title: 'On-board hardware server',
      text: 'Payment flow as a state machine; own binary TCP protocol for the bank terminal — sale, refund, shift close, recovery after a dropped link. Cash intake, change, collection, cassette reset, safe.',
      tags: [tag('nestjs'), tag('socketio'), 'TCP', tag('swagger')],
      meta: '55 files · ~9.6k lines · 68 endpoints',
    },
    {
      icon: Database,
      title: 'Operational core — one codebase, two modes',
      text: 'On the kiosk it runs offline against a local database; in the cloud it collects from the whole fleet. Scheduled full and incremental sync with time zones, retries and a journal; alerts, receipts, auto shift close, audit of every action.',
      tags: [tag('nestjs', 'NestJS 11'), tag('mongodb'), tag('jwt'), 'Cron', tag('vercel')],
      meta: '216 files · ~40k lines · 23 modules · 240 endpoints · 17 collections',
    },
    {
      icon: LayoutGrid,
      title: 'Operator console',
      text: 'Terminal list with live status, cash balances by cassette and denomination, service operations, logs, receipts, 13 Excel exports, role-based access per terminal, PIN login with an on-screen keyboard, three languages.',
      tags: [tag('react', 'React 19'), tag('tanstackRouter'), tag('redux'), tag('i18next')],
      meta: '203 files · ~24k lines',
    },
  ],
};

export const proofs: Proof[] = [
  {
    icon: Package,
    title: 'Ownership',
    text: 'Four applications, one architecture, no hand-off gaps — from the sensor to the database.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    text: 'Offline-first kiosks, retrying sync, audit trail — money handling that cannot silently lose a record.',
  },
  {
    icon: Cpu,
    title: 'Low-level work',
    text: 'A binary TCP protocol written from the spec, plus cash and scanner hardware driven from Node.',
  },
  {
    icon: Users,
    title: 'Product sense',
    text: 'Touch UI for first-time users and a dense operator console for daily work, in three languages.',
  },
];

export type PartLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export const kioskParts: { letter: PartLetter; icon: LucideIcon; title: string; text: string }[] = [
  { letter: 'A', icon: Monitor, title: 'Screen assembly', text: 'Kiosk UI: ten flow screens, transitions, live status' },
  { letter: 'B', icon: CreditCard, title: 'Bank terminal', text: 'Own binary protocol over TCP: sale, refund, shift close' },
  { letter: 'C', icon: QrCode, title: 'QR scanner', text: 'Document scan → invoice lookup in the external gateway' },
  { letter: 'D', icon: Banknote, title: 'Cash module', text: 'Intake and change, cassettes, denominations, min/max limits' },
  { letter: 'E', icon: Printer, title: 'Receipt printer', text: 'PDF by two engines, HTML preview, plain-text version' },
  { letter: 'F', icon: Cpu, title: 'On-board computer', text: 'Hardware server, operational core, local database' },
];

export const paymentMethods: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: Banknote, label: 'Cash', active: true },
  { icon: CreditCard, label: 'Card' },
  { icon: QrCode, label: 'QR document' },
];

export const fleet: { id: string; status: 'online' | 'offline' }[] = [
  { id: 'KSK-014', status: 'online' },
  { id: 'KSK-007', status: 'offline' },
  { id: 'KSK-021', status: 'online' },
];

export const fleetStats: Stat[] = [
  { value: '24', label: 'terminals in the fleet' },
  { value: '1 418', label: 'payments today' },
  { value: '◈ 2.1M', label: 'volume this week' },
  { value: '4 min', label: 'since last sync', accent: true },
];

export type TerminalStatus = 'online' | 'low' | 'offline';

export const terminals: { name: string; notes: string; coins: string; status: TerminalStatus }[] = [
  { name: 'KSK-014 · Hall A', notes: '◈ 82 400', coins: '◈ 3 120', status: 'online' },
  { name: 'KSK-021 · Hall C', notes: '◈ 9 050', coins: '◈ 240', status: 'low' },
  { name: 'KSK-007 · Lobby', notes: '◈ 41 700', coins: '◈ 1 880', status: 'offline' },
  { name: 'KSK-033 · Gate 2', notes: '◈ 67 300', coins: '◈ 2 410', status: 'online' },
];

export const stack: StackGroup[] = [
  {
    title: 'Frontend',
    items: [
      tech('typescript'),
      tech('react', 'React 19'),
      tech('tanstackRouter'),
      tech('redux'),
      tech('framer'),
      tech('i18next'),
      tech('vite'),
    ],
  },
  {
    title: 'Backend & data',
    items: [tech('nestjs', 'NestJS 11'), tech('mongodb'), tech('mongoose'), tech('jwt'), tech('node'), tech('swagger')],
  },
  {
    title: 'Realtime & hardware',
    items: [tech('socketio'), 'WebSocket · 10 events', 'TCP binary protocol', 'State machines', 'Offline-first sync'],
  },
  {
    title: 'Output & delivery',
    items: [tech('pdfkit'), tech('playwright'), tech('exceljs'), tech('vercel'), tech('git', 'Git · 840+ commits')],
  },
];
