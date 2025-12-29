import styles from "./page.module.css";

import content from "./content";
import { Heading } from "@/components/Heading/Heading";
import { ContactInfo } from "@/components/ContactInfo/ContactInfo";
import { Experience } from "@/components/Experience/Experience";
import { KnowledgeAndTools } from "@/components/knowledgeAndTools/KnowledgeAndTools";
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Heading {...content.header} />
        <ContactInfo {...content.contactInfo} />
      </header>

      <section className={styles.contentHolder}>
        <div className={styles.section}>
          <Experience experience={content.experience} />
        </div>
        <div className={styles.section}>
          <KnowledgeAndTools
            languages={content.languages}
            knowledgeAndTools={content.knowledgeAndTools}
            courses={content.courses}
            education={content.education}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
