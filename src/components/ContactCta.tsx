import { brand } from '../data/brands';
import { links } from '../data/profile';
import { BrandIcon } from './BrandIcon';
import { ExternalLink } from './ExternalLink';
import styles from './ContactCta.module.css';

export function ContactCta() {
  return (
    <section className={styles.cta}>
      <div className={styles.text}>
        <h2 className={styles.title}>Looking for an engineer who can own a system end to end?</h2>
        <p className={styles.subtitle}>
          Open to full-stack roles — TypeScript, React, NestJS, Node. Happy to walk through the architecture in a call.
        </p>
      </div>
      <ExternalLink href={links.telegram} className={styles.button}>
        <BrandIcon brand={brand.telegram} size={17} />
        Write on Telegram
      </ExternalLink>
    </section>
  );
}
