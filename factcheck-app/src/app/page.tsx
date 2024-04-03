import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center_aligned_text_box} style={{marginBottom: "1px"}}>

        <h1 className={styles.factchecklogo}>
          Welcome to FactCheck
        </h1>

        <p className={styles.description}>
          Uses LLM artifical intelligence to factcheck news articles.
        </p>

        <textarea name="InputTextArea" id="InputTextArea" rows={20} cols={150} placeholder="Input article text here!"></textarea>

      </div>

    </main>
  );
}
