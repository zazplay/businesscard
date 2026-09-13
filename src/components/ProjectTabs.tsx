import type { LucideIcon } from 'lucide-react';
import styles from './ProjectTabs.module.css';

export type Tab<Id extends string> = { id: Id; label: string; icon: LucideIcon };

type Props<Id extends string> = {
  tabs: readonly Tab<Id>[];
  active: Id;
  onChange: (id: Id) => void;
};

export const tabId = (id: string) => `tab-${id}`;
export const panelId = (id: string) => `panel-${id}`;

export function ProjectTabs<Id extends string>({ tabs, active, onChange }: Props<Id>) {
  return (
    <div role="tablist" aria-label="Projects" className={styles.list}>
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          role="tab"
          id={tabId(id)}
          aria-selected={id === active}
          aria-controls={panelId(id)}
          className={styles.tab}
          onClick={() => onChange(id)}
        >
          <Icon size={15} aria-hidden />
          {label}
        </button>
      ))}
    </div>
  );
}
