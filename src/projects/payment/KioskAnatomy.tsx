import type { CSSProperties } from 'react';
import { Card } from '../../components/Card';
import { cx } from '../../lib/cx';
import { kioskParts, paymentMethods, type PartLetter } from './data';
import styles from './KioskAnatomy.module.css';

/**
 * Where each callout points, in px from the kiosk's top-left corner.
 * Tied to the drawing in KioskAnatomy.module.css — move these if the drawing changes.
 */
const HOTSPOTS: Record<PartLetter, { side: 'left' | 'right'; x: number; y: number }> = {
  A: { side: 'left', x: 21, y: 101 }, // screen
  B: { side: 'right', x: 264, y: 50 }, // bank terminal
  C: { side: 'right', x: 229, y: 211 }, // QR scanner window
  D: { side: 'left', x: 31, y: 234 }, // cash slot
  E: { side: 'right', x: 171, y: 290 }, // receipt printer slot
  F: { side: 'left', x: 21, y: 365 }, // base with the on-board computer
};

function KioskDrawing() {
  return (
    <div aria-hidden="true">
      <div className={styles.screen}>
        <div className={styles.screenLabel}>Choose payment</div>
        <div className={styles.methods}>
          {paymentMethods.map(({ icon: Icon, label, active }) => (
            <div key={label} className={cx(styles.method, active && styles.methodActive)}>
              <span className={styles.methodName}>
                <Icon size={11} />
                {label}
              </span>
              <span className={styles.methodState}>ready</span>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalValue}>◈ 1 250</span>
        </div>
        <div className={styles.led} />
      </div>

      <div className={styles.terminal} />

      <div className={styles.body}>
        <div className={styles.scanner}>
          <div className={styles.scanSlot} />
          <div className={styles.scanWindow} />
        </div>
        <div className={styles.cashSlot} />
        <div className={styles.panels}>
          <div className={styles.panelSmall} />
          <div className={styles.panelWide} />
        </div>
        <div className={styles.printer}>
          <div className={styles.printerSlot} />
        </div>
        <div className={styles.paperWrap}>
          <div className={styles.paper}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className={styles.base} />
    </div>
  );
}

/**
 * Kiosk drawing with callouts. On a wide card each label sits beside the part it names,
 * joined by a leader line; on a narrow one the leaders end in letters keyed to the list below.
 */
export function KioskAnatomy() {
  return (
    <Card padding="lg" className={styles.card}>
      <div className={styles.stage}>
        <div className={styles.kiosk}>
          <KioskDrawing />
          <ul className={styles.callouts} aria-hidden="true">
            {kioskParts.map(({ letter, icon: Icon, title, text }) => {
              const { side, x, y } = HOTSPOTS[letter];
              return (
                <li
                  key={letter}
                  className={cx(styles.callout, styles[side])}
                  style={{ '--x': `${x}px`, top: y } as CSSProperties}
                >
                  <span className={styles.leader} />
                  <span className={styles.dot} />
                  <span className={cx(styles.badge, styles.pinned)}>{letter}</span>
                  <div className={styles.label}>
                    <div className={styles.title}>
                      <Icon size={15} className={styles.icon} />
                      {title}
                    </div>
                    <div className={styles.text}>{text}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <ul className={styles.legend}>
        {kioskParts.map(({ letter, icon: Icon, title, text }) => (
          <li key={letter} className={styles.part}>
            <span className={styles.badge} aria-hidden="true">
              {letter}
            </span>
            <div>
              <div className={styles.partTitle}>
                <Icon size={16} className={styles.icon} aria-hidden />
                {title}
              </div>
              <div className={styles.partText}>{text}</div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
