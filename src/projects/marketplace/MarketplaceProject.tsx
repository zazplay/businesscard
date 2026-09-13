import { Activity, Server, ShieldCheck } from 'lucide-react';
import { Card } from '../../components/Card';
import { HubDiagram } from '../../components/Flow';
import { ProjectOverview } from '../../components/ProjectOverview';
import { ProofGrid } from '../../components/ProofGrid';
import { Section } from '../../components/Section';
import { StackGroups } from '../../components/StackGroups';
import { EscrowHub } from './EscrowHub';
import { NotificationMatrix } from './NotificationMatrix';
import { escrow, overview, proofs, reliability, stack } from './data';
import styles from './MarketplaceProject.module.css';

export function MarketplaceProject() {
  return (
    <>
      <Section icon={ShieldCheck} title="How the escrow works" aside="fictional amounts">
        <Card padding="lg">
          <HubDiagram inputs={escrow.inputs} hub={<EscrowHub />} caption={escrow.caption} outputs={escrow.outputs} />
        </Card>
      </Section>
      <Section icon={Activity} title="Payments that never get lost">
        <Card padding="lg" className={styles.reliability}>
          <ProofGrid items={reliability} />
          <NotificationMatrix />
        </Card>
      </Section>
      <ProjectOverview data={overview} />
      <Section icon={ShieldCheck} title="What this proves">
        <ProofGrid items={proofs} />
      </Section>
      <Section icon={Server} title="Stack" tight>
        <StackGroups groups={stack} />
      </Section>
    </>
  );
}
