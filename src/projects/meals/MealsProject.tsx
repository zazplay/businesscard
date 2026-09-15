import { CalendarDays, Languages, Server, ShieldCheck, Timer, Truck } from 'lucide-react';
import { ProjectOverview } from '../../components/ProjectOverview';
import { ProofGrid } from '../../components/ProofGrid';
import { Section } from '../../components/Section';
import { StackGroups } from '../../components/StackGroups';
import { MirrorLayouts } from './MirrorLayouts';
import { OrderRail } from './OrderRail';
import { ScheduledJobs } from './ScheduledJobs';
import { WeekPlan } from './WeekPlan';
import { overview, proofs, stack } from './data';

export function MealsProject() {
  return (
    <>
      <Section icon={CalendarDays} title="A week on the plan" aside="fictional prices">
        <WeekPlan />
      </Section>
      <Section icon={Truck} title="From order to door">
        <OrderRail />
      </Section>
      <Section icon={Timer} title="Five jobs on a clock">
        <ScheduledJobs />
      </Section>
      <Section icon={Languages} title="Four languages, one mirrored">
        <MirrorLayouts />
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
