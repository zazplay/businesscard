import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Card } from '../../components/Card';
import styles from './MirrorLayouts.module.css';

/**
 * The same screen in both directions. The right-hand one is not a picture of Hebrew —
 * it is the same markup with dir="rtl", the way the storefront flips for real.
 */
function MiniScreen({ dir, label }: { dir: 'ltr' | 'rtl'; label: string }) {
  return (
    <div className={styles.column}>
      <div className={styles.label}>{label}</div>
      <div className={styles.screen} dir={dir} aria-hidden="true">
        <div className={styles.head}>
          <ArrowLeft size={12} className={styles.arrow} />
          <span className={styles.headBar} />
        </div>
        <div className={styles.item}>
          <span className={styles.thumb} />
          <span className={styles.lines}>
            <span />
            <span />
          </span>
          <span className={styles.price}>◈ 48</span>
        </div>
        <div className={styles.button}>
          <span className={styles.buttonBar} />
          <ChevronRight size={11} className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}

export function MirrorLayouts() {
  return (
    <Card padding="lg" className={styles.card}>
      <div className={styles.screens}>
        <MiniScreen dir="ltr" label="ltr · left to right" />
        <MiniScreen dir="rtl" label="rtl · right to left" />
      </div>
      <p className={styles.note}>
        Four locales share one layout. For Hebrew the interface turns around completely — reading direction, the order
        of controls, arrows and the side every margin sits on — so the screen reads as though it was drawn that way.
      </p>
    </Card>
  );
}
