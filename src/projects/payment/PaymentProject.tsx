import { Cloud, Cpu, LayoutGrid, Server, ShieldCheck } from 'lucide-react';
import { ProjectOverview } from '../../components/ProjectOverview';
import { ProofGrid } from '../../components/ProofGrid';
import { Section } from '../../components/Section';
import { StackGroups } from '../../components/StackGroups';
import { ConsoleTable } from './ConsoleTable';
import { FleetDiagram } from './FleetDiagram';
import { KioskAnatomy } from './KioskAnatomy';
import { overview, proofs, stack } from './data';

export function PaymentProject() {
  return (
    <>
      <Section icon={Cpu} title="Anatomy of the kiosk">
        <KioskAnatomy />
      </Section>
      <Section icon={Cloud} title="Fleet → cloud → one console">
        <FleetDiagram />
      </Section>
      <Section icon={LayoutGrid} title="Operator console" note="— fictional data">
        <ConsoleTable />
      </Section>
      <ProjectOverview data={overview} statSize="md" workSize="lg" />
      <Section icon={ShieldCheck} title="What this proves">
        <ProofGrid items={proofs} />
      </Section>
      <Section icon={Server} title="Stack" tight>
        <StackGroups groups={stack} />
      </Section>
    </>
  );
}
