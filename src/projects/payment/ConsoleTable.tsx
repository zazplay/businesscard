import { Card } from '../../components/Card';
import { cx } from '../../lib/cx';
import { terminals, type TerminalStatus } from './data';
import styles from './ConsoleTable.module.css';

const COLUMNS = ['Terminal', 'Notes', 'Coins', 'Status'];

const STATUS_LABEL: Record<TerminalStatus, string> = {
  online: 'online',
  low: 'low cash',
  offline: 'offline · syncing',
};

export function ConsoleTable() {
  return (
    <Card padding="none" className={styles.card}>
      <div className={styles.summary}>
        <span>Terminals · 24</span>
        <span className={styles.counts}>
          <span className={styles.ink}>22 online</span>
          <span>1 offline</span>
          <span className={styles.accent}>1 low cash</span>
        </span>
      </div>
      <div role="table" aria-label="Terminals">
        <div role="row" className={cx(styles.row, styles.head)}>
          {COLUMNS.map((column) => (
            <span key={column} role="columnheader">
              {column}
            </span>
          ))}
        </div>
        {terminals.map((t) => (
          <div key={t.name} role="row" className={styles.row}>
            <span role="cell">{t.name}</span>
            <span role="cell" className={styles.mono}>
              {t.notes}
            </span>
            <span role="cell" className={styles.mono}>
              {t.coins}
            </span>
            <span role="cell" className={cx(styles.status, styles[t.status])}>
              {STATUS_LABEL[t.status]}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
