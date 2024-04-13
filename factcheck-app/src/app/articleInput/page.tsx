import OutputTextArea from "@/components/outputTextArea/outputTextArea";
import styles from "./articleInput.module.css";
import InputTextArea from "@/components/inputTextArea/inputTextArea";
import ExecuteReviewButton from "@/components/executeReviewButton/executeReviewButton";
import { scrapeDynamicText } from "@/scripts/scraping";

export default function Page() {

  // Example usage
  const url = 'https://sv.wikipedia.org/wiki/Qin_Shi_Huangdis_mausoleum';

  scrapeDynamicText(url).then((text) => {
    console.log('Scraped dynamic text:', text);
  });

  return (
    <main className={styles.main}>

      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Fetched text</h1>

        <p className={styles.description}>Text scraped from the input url</p>

        <InputTextArea placeholder = "Fetched article information" />

        <ExecuteReviewButton buttonText = "Review text!" />

        <h2 className={styles.factchecklogo}>FactCheck verdicts</h2>

        <p className={styles.description}>These verdicts are far from perfect as LLM's are prone to hallucination, feel free to suggest changes</p>

        <OutputTextArea placeholder= "Factcheck verdict" />

      </div>
      
    </main>
  );
}
