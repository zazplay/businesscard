import type { Proof } from '../types';
import styles from './ProofGrid.module.css';

export function ProofGrid({ items }: { items: Proof[] }) {
  return (
    <div className={styles.grid}>
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className={styles.item}>
          <h3 className={styles.title}>
            <Icon size={15} className={styles.icon} aria-hidden />
            {title}
          </h3>
          <p className={styles.text}>{text}</p>
        </div>
      ))}
    </div>
  );
}
