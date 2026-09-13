import type { ReactNode } from 'react';
import { cx } from '../lib/cx';
import styles from './WindowChrome.module.css';

type Props = {
  label: string;
  size?: 'sm' | 'md';
  /** Extra content pushed to the right end of the bar. */
  children?: ReactNode;
};

/** Title bar of a mock app window: three dots and a label. */
export function WindowChrome({ label, size = 'md', children }: Props) {
  return (
    <div className={cx(styles.bar, styles[size])}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.label}>{label}</span>
      {children}
    </div>
  );
}
