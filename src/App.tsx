import { useState } from 'react';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProjectTabs, panelId, tabId } from './components/ProjectTabs';
import { projects, type ProjectId } from './projects';
import styles from './App.module.css';

export default function App() {
  const [activeId, setActiveId] = useState<ProjectId>('pay');
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <div className={styles.page}>
      <div className={styles.flow}>
        <Header />
        <main className={styles.flow}>
          <ProjectTabs tabs={projects} active={active.id} onChange={setActiveId} />
          <div role="tabpanel" id={panelId(active.id)} aria-labelledby={tabId(active.id)} className={styles.flow}>
            <active.Content />
          </div>
          <ContactCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
