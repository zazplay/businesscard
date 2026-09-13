import type { StackGroup, StackItem } from '../types';
import { BrandIcon } from './BrandIcon';
import { ExternalLink } from './ExternalLink';
import styles from './StackGroups.module.css';

function Chip({ item }: { item: StackItem }) {
  const { label, href, brand } = typeof item === 'string' ? { label: item, href: undefined, brand: undefined } : item;
  const content = (
    <>
      {brand && <BrandIcon brand={brand} size={15} className={styles.icon} />}
      {label}
    </>
  );

  return href ? (
    <ExternalLink href={href} className={styles.chip}>
      {content}
    </ExternalLink>
  ) : (
    <span className={styles.chip}>{content}</span>
  );
}

export function StackGroups({ groups }: { groups: StackGroup[] }) {
  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <h3 className={styles.label}>{group.title}</h3>
          <div className={styles.chips}>
            {group.items.map((item) => (
              <Chip key={typeof item === 'string' ? item : item.label} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
