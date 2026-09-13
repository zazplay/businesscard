import { QrCode } from 'lucide-react';
import { cx } from '../../lib/cx';
import styles from './CabinetKiosk.module.css';

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'];

/** Miniature of the touchscreen mounted on the cabinet: phone entry plus the QR scanner. */
export function CabinetKiosk() {
  return (
    <div className={styles.column} aria-hidden="true">
      <div className={styles.label}>Kiosk on the cabinet</div>
      <div className={styles.frame}>
        <div className={styles.screen}>
          <div className={styles.prompt}>Enter phone number</div>
          <div className={styles.phone}>
            +•• ••• 42
            <span className={styles.caret} />
          </div>
          <div className={styles.keypad}>
            {KEYS.map((key, i) => (
              <div key={i} className={cx(styles.key, !key && styles.keyBlank)}>
                {key}
              </div>
            ))}
          </div>
          <div className={styles.send}>Send code</div>
        </div>
        <div className={styles.scanner}>
          <div className={styles.scannerLabel}>
            <QrCode size={9} />
            QR scanner
          </div>
          <div className={styles.scanArea}>
            <span className={styles.scanLine} />
          </div>
        </div>
      </div>
      <div className={styles.spec}>900×1440 · portrait</div>
    </div>
  );
}
