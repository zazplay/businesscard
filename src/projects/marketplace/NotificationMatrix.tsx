import { Bell, Mail, ShieldCheck, Smartphone } from 'lucide-react';
import { Fragment } from 'react';
import { cx } from '../../lib/cx';
import { notificationEvents } from './data';
import styles from './NotificationMatrix.module.css';

const CHANNELS = [
  { icon: Bell, label: 'In-app' },
  { icon: Smartphone, label: 'Mobile' },
  { icon: Mail, label: 'E-mail' },
];

/** Which channel each event goes to, as users configure it. */
export function NotificationMatrix() {
  return (
    <div className={styles.block}>
      <div className={styles.title}>22 events × 3 channels — the user picks</div>
      <div className={styles.matrix}>
        <span />
        {CHANNELS.map(({ icon: Icon, label }) => (
          <span key={label} className={styles.channel} role="img" aria-label={label} title={label}>
            <Icon size={11} aria-hidden />
          </span>
        ))}
        {notificationEvents.map(({ event, channels }) => (
          <Fragment key={event}>
            <span className={styles.event}>{event}</span>
            {channels.map((on, i) => (
              <span
                key={CHANNELS[i].label}
                className={cx(styles.toggle, on ? styles.on : styles.off)}
                role="img"
                aria-label={`${CHANNELS[i].label}: ${on ? 'on' : 'off'}`}
              >
                {on && <ShieldCheck size={12} aria-hidden />}
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
