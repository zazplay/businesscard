import { KeyRound } from 'lucide-react';
import { cx } from '../lib/cx';
import styles from './previews.module.css';

/**
 * Miniatures for the project switcher: the same objects the sections below draw in full —
 * the kiosk, the wall of cells and the escrow card.
 */

export function PaymentPreview() {
  return (
    <div className={styles.kiosk}>
      <div className={styles.kioskScreen}>
        <span className={styles.kioskRowActive} />
        <span className={styles.kioskRow} />
        <span className={styles.kioskRow} />
      </div>
      <span className={styles.kioskSlot} />
      <span className={styles.kioskTray} />
    </div>
  );
}

/** Three rows of six cells: empty, full, issued and the one standing open. */
const CELLS = ['efifei', 'feoife', 'ifeeif'].join('');

export function LockerPreview() {
  return (
    <div className={styles.cells}>
      {[...CELLS].map((state, i) => (
        <span key={i} className={cx(styles.cell, styles[state])} />
      ))}
    </div>
  );
}

/** Delivery days across a week: three with meals, one weekend set. */
const WEEK = ['on', 'on', 'off', 'on', 'off', 'add', 'off'];

export function MealsPreview() {
  return (
    <div className={styles.plan}>
      <div className={styles.planHead}>per week</div>
      <div className={styles.planPrice}>◈ 420</div>
      <div className={styles.planWeek}>
        {WEEK.map((day, i) => (
          <span key={i} className={cx(styles.tick, styles[day])} />
        ))}
      </div>
    </div>
  );
}

export function MarketplacePreview() {
  return (
    <div className={styles.escrow}>
      <div className={styles.escrowHead}>
        <KeyRound size={9} className={styles.escrowIcon} />
        in escrow
      </div>
      <div className={styles.escrowAmount}>◈ 1 250</div>
      <div className={styles.escrowBar}>
        <span />
      </div>
    </div>
  );
}
