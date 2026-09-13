import { KeyRound } from 'lucide-react';
import styles from './EscrowHub.module.css';

export function EscrowHub() {
  return (
    <div className={styles.hub}>
      <div className={styles.title}>
        <KeyRound size={16} className={styles.icon} aria-hidden />
        Funds held in escrow
      </div>
      <div className={styles.amount}>
        ◈ 1 250 <span className={styles.held}>held</span>
      </div>
      <div className={styles.progress} aria-hidden="true">
        <span style={{ width: '62%' }} />
      </div>
      <div className={styles.release}>auto-release in 2 d 07 h</div>
    </div>
  );
}
