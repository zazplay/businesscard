import type { ReactNode } from 'react';
import { cx } from '../lib/cx';
import styles from './Card.module.css';

type Props = {
  padding?: 'none' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
};

export function Card({ padding = 'md', className, children }: Props) {
  return <div className={cx(styles.card, padding !== 'none' && styles[padding], className)}>{children}</div>;
}
