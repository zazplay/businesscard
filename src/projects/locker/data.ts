import {
  Activity,
  Ban,
  Cpu,
  KeyRound,
  LayoutGrid,
  Mail,
  Monitor,
  Package,
  Server,
  Smartphone,
  TriangleAlert,
  Truck,
  Users,
  WifiOff,
  type LucideIcon,
} from 'lucide-react';
import { tech } from '../../data/tech';
import type { FlowNodeData, Overview, Proof, StackGroup } from '../../types';

export type CellState = 'empty' | 'full' | 'issued' | 'open' | 'damaged' | 'retired';

export const CELL_STYLE: Record<CellState, { icon: LucideIcon; color: string; border: string; background: string }> = {
  empty: { icon: Package, color: '#2F6FE0', border: '#CFE0FF', background: '#F2F6FF' },
  full: { icon: Package, color: '#1F8B57', border: '#C6EAD6', background: '#F0FAF4' },
  issued: { icon: Truck, color: '#B4700F', border: '#F6DCB4', background: '#FFF7EC' },
  open: { icon: KeyRound, color: '#B4700F', border: '#EBC98F', background: 'linear-gradient(180deg, #FFF6E6, #FFFFFF)' },
  damaged: { icon: TriangleAlert, color: '#C4373C', border: '#F6CACA', background: '#FEF1F1' },
  retired: { icon: Ban, color: '#70707E', border: '#E2E2E8', background: '#F4F4F6' },
};

const STATE_CODE: Record<string, CellState> = {
  E: 'empty',
  F: 'full',
  I: 'issued',
  O: 'open',
  D: 'damaged',
  R: 'retired',
};

/** Four shelves of ten cells, one letter per cell (see STATE_CODE). */
const WALL = ['EFIFEIFEIE', 'FIOFEIFEIF', 'EFIEDFEIFE', 'IFEREIFIEF'];

/** Cell number counts across shelves; the hardware id is shelf + position, e.g. 203. */
export const cells = WALL.flatMap((shelf, row) =>
  [...shelf].map((code, col) => ({
    number: row * shelf.length + col + 1,
    hardwareId: `${row + 1}${String(col + 1).padStart(2, '0')}`,
    state: STATE_CODE[code],
  })),
);

export const cellTotals = [
  { value: '96', label: 'cells total', color: '#4B3BE4', total: true },
  { value: '38', label: 'empty', color: '#2F6FE0' },
  { value: '22', label: 'full', color: '#1F8B57' },
  { value: '31', label: 'issued', color: '#B4700F' },
  { value: '3', label: 'damaged content', color: '#C4373C' },
  { value: '2', label: 'faulty / retired', color: '#70707E' },
];

export const cellFilters = [
  { label: 'Empty', color: '#2F6FE0' },
  { label: 'Full', color: '#1F8B57' },
  { label: 'Issued', color: '#B4700F' },
  { label: 'Damaged content', color: '#C4373C' },
  { label: 'Retired', color: '#70707E' },
];

export const cellLegend = [
  { label: 'Empty', color: '#2F6FE0' },
  { label: 'Full', color: '#1F8B57' },
  { label: 'Issued', color: '#B4700F' },
  { label: 'Damaged content', color: '#C4373C' },
  { label: 'Cell faulty', color: '#B32B45' },
  { label: 'Retired', color: '#70707E' },
];

export const channels: { inputs: FlowNodeData[]; hub: FlowNodeData; caption: string; outputs: FlowNodeData[] } = {
  inputs: [
    { icon: Monitor, title: 'Kiosk', caption: 'phone · code · QR scan' },
    { icon: Smartphone, title: "Driver's phone", caption: 'SMS code · 2 min' },
  ],
  hub: { icon: Server, title: 'Backend decides', caption: 'rotation · approvals · audit' },
  caption:
    'The kiosk never opens a cell itself — it asks the backend, and the backend decides which cell opens and tells the controller.',
  outputs: [
    { icon: Cpu, title: 'Lock controller', caption: 'partner · HTTP + WS' },
    { icon: LayoutGrid, title: 'Dispatcher panel', caption: 'live grid · approvals' },
    { icon: Mail, title: 'E-mail & SMS', caption: 'alerts · 08:00 report' },
  ],
};

export const overview: Overview = {
  period: '2026 · 8 months',
  title: 'Smart equipment locker',
  badge: '3 of 4 apps mine · backend, kiosk, dispatcher',
  summary:
    'A metal cabinet hands out work kits — payment terminal, phone, car keys. In the morning a worker types a phone number on the kiosk, gets an SMS code and a cell opens; in the evening they scan every item back in. A dispatcher watches the whole wall in the browser and steps in when a human decision is needed.',
  stats: [
    { value: '3', label: 'applications written by me' },
    { value: '~28k', label: 'lines of my TypeScript' },
    { value: '100', label: 'API endpoints' },
    { value: '91%', label: 'of 250+ commits' },
  ],
  work: [
    {
      icon: Server,
      title: 'Backend — the brain',
      text: 'Phone + SMS login with shift windows, fair cell rotation, dispatcher approvals that survive a restart, verify-then-open returns, dual SMS channel, Excel shift import, inventory history, scheduled hardware sync and an 08:00 daily report.',
      tags: ['NestJS 10', 'PostgreSQL', 'TypeORM', 'Socket.IO', 'JWT', 'Swagger'],
      meta: '127 files · ~12.6k lines · 15 modules · 100 endpoints',
    },
    {
      icon: Monitor,
      title: 'Kiosk — the touchscreen',
      text: '18 flow screens on a portrait 900×1440 panel: on-screen keypad, press-on-touch like a payment terminal, session generations so a stale reply cannot open a cell for the next person, triple confirmation (button, door-closed event, timeout) where only the first one counts.',
      tags: ['React 18', 'Vite', 'Tailwind', 'Socket.IO'],
      meta: '29 files · ~3.8k lines',
    },
    {
      icon: LayoutGrid,
      title: 'Dispatcher panel — the workplace',
      text: 'Live grid of every cell with real-time door indicators, scripted state changes, an un-dismissable approval dialog with sound and polling fallback, Excel shift import with row-level editing, inventory, notifications, PDF and Excel reports, roles and settings.',
      tags: ['React 18', 'TanStack Query', 'shadcn/ui', 'zod'],
      meta: '68 files · ~11.7k lines',
    },
    {
      icon: Cpu,
      title: "Lock controller — partner's work",
      text: 'A Python service on a Raspberry Pi drives the locks, the QR scanner and the GSM modem. Written by my project partner; my part is the HTTP and WebSocket integration.',
      external: true,
    },
  ],
};

export const proofs: Proof[] = [
  {
    icon: Activity,
    title: 'Algorithms, not just forms',
    text: 'Cells are picked from the full and closed ones by least usage, then at random — lock wear spreads evenly and a stuck cell never blocks the queue.',
  },
  {
    icon: Users,
    title: 'Human in the loop',
    text: 'A second issue of the day waits for a dispatcher: the request lives in the database, survives a restart, first click wins, five minutes and it expires.',
  },
  {
    icon: KeyRound,
    title: 'Physical safety rules',
    text: 'The door opens only after every QR code matches; the return completes on the door-closed event, and a retry after a lost reply is safe.',
  },
  {
    icon: WifiOff,
    title: 'No single point of failure',
    text: 'SMS goes out through the cabinet modem or a cloud gateway; one event fans out to the panel, e-mail and SMS at once.',
  },
];

export const stack: StackGroup[] = [
  {
    title: 'Frontend',
    items: [
      tech('typescript'),
      tech('react', 'React 18'),
      tech('tanstackQuery'),
      tech('tailwind'),
      tech('shadcn'),
      tech('zod'),
      tech('vite'),
    ],
  },
  {
    title: 'Backend & data',
    items: [tech('nestjs', 'NestJS 10'), tech('postgresql'), tech('typeorm'), tech('jwt'), tech('swagger')],
  },
  {
    title: 'Realtime & hardware',
    items: [tech('socketio'), tech('raspberrypi'), 'GSM modem + cloud SMS', 'QR scanning', 'Door events'],
  },
  {
    title: 'Output & delivery',
    items: ['PDF reports', 'Excel import / export', 'E-mail notifications', 'Daily 08:00 digest'],
  },
];
