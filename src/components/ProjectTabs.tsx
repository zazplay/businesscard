import { useRef, type ComponentType, type KeyboardEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import styles from './ProjectTabs.module.css';

export type Tab<Id extends string> = {
  id: Id;
  label: string;
  /** Short line under the title, in the same voice as the captions on the diagrams. */
  caption: string;
  icon: LucideIcon;
  Preview: ComponentType;
};

type Props<Id extends string> = {
  tabs: readonly Tab<Id>[];
  active: Id;
  onChange: (id: Id) => void;
};

export const tabId = (id: string) => `tab-${id}`;
export const panelId = (id: string) => `panel-${id}`;

export function ProjectTabs<Id extends string>({ tabs, active, onChange }: Props<Id>) {
  const buttons = useRef(new Map<Id, HTMLButtonElement>());

  /** Arrow keys walk the tabs, as the tablist pattern expects. */
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    const current = tabs.findIndex((tab) => tab.id === active);

    let next: Id | undefined;
    if (step) next = tabs[(current + step + tabs.length) % tabs.length].id;
    else if (event.key === 'Home') next = tabs[0].id;
    else if (event.key === 'End') next = tabs[tabs.length - 1].id;
    if (!next) return;

    event.preventDefault();
    onChange(next);
    buttons.current.get(next)?.focus();
  }

  return (
    <div className={styles.wrap}>
      <div role="tablist" aria-label="Projects" className={styles.list} onKeyDown={handleKeyDown}>
        {tabs.map(({ id, label, caption, icon: Icon, Preview }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={tabId(id)}
            data-project={id}
            aria-selected={id === active}
            aria-controls={panelId(id)}
            ref={(el) => {
              if (el) buttons.current.set(id, el);
              else buttons.current.delete(id);
            }}
            className={styles.tab}
            onClick={() => onChange(id)}
          >
            <span className={styles.preview} aria-hidden="true">
              <Preview />
            </span>
            <span className={styles.text}>
              <span className={styles.title}>
                <Icon size={14} className={styles.icon} aria-hidden />
                {label}
              </span>
              <span className={styles.caption}>{caption}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
