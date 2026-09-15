import type { CSSProperties } from 'react';
import { Card } from '../../components/Card';
import { cx } from '../../lib/cx';
import { deliveryStages, history, orderStages, type Stage } from './data';
import styles from './OrderRail.module.css';

function Rail({ title, stages }: { title: string; stages: Stage[] }) {
  return (
    <div className={styles.railBlock}>
      <div className={styles.railTitle}>{title}</div>
      <div className={styles.rail} style={{ '--stages': stages.length } as CSSProperties}>
        {stages.map(({ label, state }) => (
          <div key={label} className={cx(styles.stage, styles[state])}>
            <span className={styles.dot} />
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** The two rails an order runs on, and the trail it leaves behind. */
export function OrderRail() {
  return (
    <Card padding="lg" className={styles.card}>
      <Rail title="Order" stages={orderStages} />
      <Rail title="Delivery" stages={deliveryStages} />

      <div className={styles.history}>
        {history.map(({ time, event, who }) => (
          <div key={time} className={styles.entry}>
            <span className={styles.time}>{time}</span>
            <span className={styles.event}>{event}</span>
            <span className={styles.who}>{who}</span>
          </div>
        ))}
      </div>

      <p className={styles.note}>
        Every move writes the time and the person into the order's history, so a day later it is still clear who sent it
        to the kitchen and when it left with the courier.
      </p>
    </Card>
  );
}
