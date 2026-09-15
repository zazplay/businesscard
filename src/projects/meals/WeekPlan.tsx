import { Plus, Utensils } from 'lucide-react';
import { Card } from '../../components/Card';
import { cx } from '../../lib/cx';
import { bill, billTotal, week } from './data';
import styles from './WeekPlan.module.css';

/** What a client assembles: the delivery week, and the price the server puts on it. */
export function WeekPlan() {
  return (
    <Card padding="lg" className={styles.card}>
      <div className={styles.week}>
        {week.map(({ day, kind }) => (
          <div key={day} className={cx(styles.day, styles[kind])}>
            <span className={styles.dayName}>{day}</span>
            <span className={styles.mark}>
              {kind === 'delivery' && <Utensils size={13} />}
              {kind === 'addon' && <Plus size={13} />}
            </span>
            <span className={styles.dayNote}>
              {kind === 'delivery' && 'meals'}
              {kind === 'addon' && 'set'}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.columns}>
        <div className={styles.bill}>
          {bill.map(({ label, value, accent }) => (
            <div key={label} className={styles.billRow}>
              <span>{label}</span>
              <span className={cx(styles.amount, accent && styles.discount)}>{value}</span>
            </div>
          ))}
          <div className={cx(styles.billRow, styles.total)}>
            <span>{billTotal.label}</span>
            <span className={styles.amount}>{billTotal.value}</span>
          </div>
        </div>

        <p className={styles.note}>
          Day, week and month prices, plan discounts and the cheaper rate for a set bought together with the plan are
          one formula on the server. The screen previews the total, the server recalculates it before the card is
          charged — and its answer is the one that counts.
        </p>
      </div>
    </Card>
  );
}
