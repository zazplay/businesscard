import { profile, socials } from '../data/profile';
import { cx } from '../lib/cx';
import { BrandIcon } from './BrandIcon';
import { ExternalLink } from './ExternalLink';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.eyebrow}>
        <span className={styles.dot} />
        <span>{profile.role}</span>
      </div>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.intro}>{profile.intro}</p>
      <div className={styles.links}>
        {socials.map((s) => (
          <ExternalLink key={s.id} href={s.href} className={cx(styles.link, styles[s.id])}>
            <BrandIcon brand={s.brand} size={16} />
            {s.label}
          </ExternalLink>
        ))}
      </div>
    </header>
  );
}
