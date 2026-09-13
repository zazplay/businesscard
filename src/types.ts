import type { LucideIcon } from 'lucide-react';

/** A simple-icons style brand mark: a single path on a 24×24 viewBox. */
export type Brand = { title: string; path: string };

export type Stat = { value: string; label: string; accent?: boolean };

/** Tech tag under a work item; a plain string renders without an icon. */
export type TechTag = string | { label: string; brand?: Brand };

export type WorkItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  tags?: TechTag[];
  /** Grey size summary appended after the tags. */
  meta?: string;
  /** Someone else's part of the system: shown with a dash instead of a number. */
  external?: boolean;
};

export type Overview = {
  period: string;
  title: string;
  badge: string;
  summary: string;
  stats: Stat[];
  work: WorkItem[];
  footnote?: string;
};

export type Proof = { icon: LucideIcon; title: string; text: string };

/** Stack chip; a plain string renders as a chip without a link. */
export type StackItem = string | { label: string; href?: string; brand?: Brand };

export type StackGroup = { title: string; items: StackItem[] };

export type FlowNodeData = { icon: LucideIcon; title: string; caption: string };
