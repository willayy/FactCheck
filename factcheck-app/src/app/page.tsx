import ReviewTextButton from "@/components/reviewTextButton/page";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Welcome to FactCheck</h1>

        <p className={styles.description}>Uses LLM artifical intelligence to factcheck news articles.</p>

        <textarea className={styles.i_text_area} name="InputTextArea" id="InputTextArea" placeholder="Input article text here!"></textarea>

        <ReviewTextButton />

        <h2 className={styles.factchecklogo}>FactCheck verdicts</h2>

        <p className={styles.description}>These verdicts are far from perfect as LLM's are prone to hallucination, feel free to suggest changes</p>

        <textarea className={styles.o_text_area} name="OutputTextArea" id="OutputTextArea" placeholder="Output article text here!"></textarea>

      </div>
    </main>
  );
}
