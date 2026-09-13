import { WindowChrome } from '../../components/WindowChrome';
import { cx } from '../../lib/cx';
import { CabinetKiosk } from './CabinetKiosk';
import { CELL_STYLE, cellFilters, cellLegend, cells, cellTotals } from './data';
import styles from './CellOverview.module.css';

/** Mock of the dispatcher's live cell grid, with the cabinet kiosk beside it. */
export function CellOverview() {
  return (
    <>
      <div className={styles.window}>
        <WindowChrome label="Cell overview">
          <span className={styles.live}>
            <span className={styles.liveDot} />
            live
          </span>
        </WindowChrome>

        <div className={styles.body}>
          <div className={styles.totals}>
            {cellTotals.map(({ value, label, color, total }) => (
              <div key={label} className={cx(styles.total, total && styles.totalMain)}>
                <div className={styles.totalValue} style={{ color }}>
                  {value}
                </div>
                <div className={styles.totalLabel}>{label}</div>
              </div>
            ))}
          </div>

          <div className={styles.filters}>
            <span className={cx(styles.filter, styles.filterActive)}>
              <span className={styles.filterDot} />
              All
            </span>
            {cellFilters.map(({ label, color }) => (
              <span key={label} className={styles.filter}>
                <span className={styles.filterDot} style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>

          <div className={styles.wall}>
            <div className={styles.cells}>
              {cells.map(({ number, hardwareId, state }) => {
                const { icon: Icon, color, border, background } = CELL_STYLE[state];
                const open = state === 'open';
                return (
                  <div
                    key={number}
                    className={cx(styles.cell, open && styles.cellOpen)}
                    style={{ color, borderColor: border, background }}
                  >
                    <Icon size={12} className={styles.cellIcon} aria-hidden />
                    <div className={styles.cellNumber}>{number}</div>
                    <div className={styles.cellId}>{open ? 'open' : hardwareId}</div>
                  </div>
                );
              })}
            </div>
            <CabinetKiosk />
          </div>

          <div className={styles.legend}>
            {cellLegend.map(({ label, color }) => (
              <span key={label} className={styles.legendItem}>
                <span className={styles.swatch} style={{ background: color }} />
                {label}
              </span>
            ))}
            <span className={cx(styles.legendItem, styles.legendOpen)}>
              <span className={styles.swatch} />
              Open now
            </span>
          </div>
        </div>
      </div>

      <p className={styles.note}>
        Every cell carries its own state and hardware id; the grid updates live over WebSocket, and an open door lights
        up the moment the controller reports it. Cell 13 is open right now — rotation picked it out of the full, closed
        cells as the one opened the fewest times, so lock wear spreads evenly across the wall.
      </p>
    </>
  );
}
