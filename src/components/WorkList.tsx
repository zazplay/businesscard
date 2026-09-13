import type { WorkItem } from '../types';
import { cx } from '../lib/cx';
import { BrandIcon } from './BrandIcon';
import styles from './WorkList.module.css';

type Props = { items: WorkItem[]; size?: 'md' | 'lg' };

export function WorkList({ items, size = 'md' }: Props) {
  let number = 0;

  return (
    <ol className={cx(styles.list, size === 'lg' && styles.lg)}>
      {items.map(({ icon: Icon, title, text, tags, meta, external }) => {
        const index = external ? '—' : String(++number).padStart(2, '0');
        return (
          <li key={title} className={cx(styles.item, external && styles.external)}>
            <span className={styles.index} aria-hidden="true">
              {index}
            </span>
            <div>
              <h4 className={styles.title}>
                <Icon size={15.5} className={styles.icon} aria-hidden />
                {title}
              </h4>
              <div className={styles.description}>
                <p className={styles.text}>{text}</p>
                {(tags || meta) && (
                  <div className={styles.tags}>
                    {tags?.map((t) => {
                      const { label, brand } = typeof t === 'string' ? { label: t, brand: undefined } : t;
                      return (
                        <span key={label} className={styles.tag}>
                          {brand && <BrandIcon brand={brand} size={12} />}
                          {label}
                        </span>
                      );
                    })}
                    {meta && <span className={styles.meta}>{meta}</span>}
                  </div>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
