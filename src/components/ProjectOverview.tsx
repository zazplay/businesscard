import { Package } from 'lucide-react';
import type { Overview } from '../types';
import { Card } from './Card';
import { Section } from './Section';
import { StatGrid } from './StatGrid';
import { WorkList } from './WorkList';
import styles from './ProjectOverview.module.css';

type Props = {
  data: Overview;
  statSize?: 'md' | 'lg';
  workSize?: 'md' | 'lg';
};

/** The "Selected work" card: title, summary, headline numbers and the apps that make up the project. */
export function ProjectOverview({ data, statSize = 'lg', workSize = 'md' }: Props) {
  return (
    <Section icon={Package} title="Selected work" aside={data.period}>
      <Card className={styles.card}>
        <div className={styles.intro}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{data.title}</h3>
            <span className={styles.badge}>{data.badge}</span>
          </div>
          <p className={styles.summary}>{data.summary}</p>
        </div>
        <StatGrid stats={data.stats} size={statSize} />
        <WorkList items={data.work} size={workSize} />
        {data.footnote && <p className={styles.footnote}>{data.footnote}</p>}
      </Card>
    </Section>
  );
}
