import { socials } from '../data/profile';
import { cx } from '../lib/cx';
import { BrandIcon } from './BrandIcon';
import { ExternalLink } from './ExternalLink';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.note}>
        Under NDA: client, brand, hardware vendors and integrations are not named; all figures on screens are fictional.
      </p>
      <nav className={styles.links} aria-label="Contacts">
        {socials.map((s) => (
          <ExternalLink key={s.id} href={s.href} className={cx(styles.link, styles[s.id])}>
            <BrandIcon brand={s.brand} size={13} />
            {s.label}
          </ExternalLink>
        ))}
      </nav>
    </footer>
  );
}
