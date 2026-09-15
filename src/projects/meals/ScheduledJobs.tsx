import { Card } from '../../components/Card';
import { jobs } from './data';
import styles from './ScheduledJobs.module.css';

/** The clock the service runs on: five jobs that keep money and orders from hanging. */
export function ScheduledJobs() {
  return (
    <Card padding="none" className={styles.card}>
      {jobs.map(({ every, does }) => (
        <div key={every} className={styles.job}>
          <span className={styles.every}>{every}</span>
          <span className={styles.does}>{does}</span>
        </div>
      ))}
    </Card>
  );
}
