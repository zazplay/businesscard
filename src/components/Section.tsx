import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cx } from '../lib/cx';
import styles from './Section.module.css';

type Props = {
  icon: LucideIcon;
  title: string;
  /** Lower-case remark inside the heading, e.g. "— fictional data". */
  note?: string;
  /** Right-aligned meta next to the heading, e.g. the period. */
  aside?: string;
  /** Slightly smaller gap between heading and content. */
  tight?: boolean;
  children: ReactNode;
};

export function Section({ icon: Icon, title, note, aside, tight, children }: Props) {
  const heading = (
    <h2 className={styles.title}>
      <Icon size={13} className={styles.icon} aria-hidden />
      {title}
      {note && <span className={styles.note}>{note}</span>}
    </h2>
  );

  return (
    <section className={cx(styles.section, tight && styles.tight)}>
      {aside ? (
        <div className={styles.head}>
          {heading}
          <span className={styles.aside}>{aside}</span>
        </div>
      ) : (
        heading
      )}
      {children}
    </section>
  );
}
