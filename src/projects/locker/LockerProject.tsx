import { Activity, LayoutGrid, Server, ShieldCheck } from 'lucide-react';
import { Card } from '../../components/Card';
import { FlowNode, HubDiagram } from '../../components/Flow';
import { ProjectOverview } from '../../components/ProjectOverview';
import { ProofGrid } from '../../components/ProofGrid';
import { Section } from '../../components/Section';
import { StackGroups } from '../../components/StackGroups';
import { CellOverview } from './CellOverview';
import { channels, overview, proofs, stack } from './data';

export function LockerProject() {
  return (
    <>
      <Section icon={LayoutGrid} title="The whole wall on one screen" aside="dispatcher panel · fictional data">
        <CellOverview />
      </Section>
      <Section icon={Activity} title="One event → three channels">
        <Card padding="lg">
          <HubDiagram
            inputs={channels.inputs}
            hub={<FlowNode {...channels.hub} hub />}
            caption={channels.caption}
            outputs={channels.outputs}
          />
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
