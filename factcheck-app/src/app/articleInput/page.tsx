import ContinueButton from "@/components/continueButton/page";
import InputTextArea from "@/components/inputTextArea/page";
import OutputTextArea from "@/components/outputTextArea/page";
import styles from "./articleInput.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Welcome to FactCheck</h1>

        <p className={styles.description}>Uses LLM artifical intelligence to factcheck news articles.</p>

        <InputTextArea placeholder = "Input article text here!" />

        <ContinueButton buttonText = "Review text!" />

        <h2 className={styles.factchecklogo}>FactCheck verdicts</h2>

        <p className={styles.description}>These verdicts are far from perfect as LLM's are prone to hallucination, feel free to suggest changes</p>

        <OutputTextArea placeholder= "Factcheck verdict" />

      </div>
    </main>
  );
}