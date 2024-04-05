import styles from "./homepage.module.css";
import InputLinkTextArea from "@/components/inputLinkTextArea/page";
import NavButton from "@/components/navButton/page";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Welcome to FactCheck</h1>

        <p className={styles.description}>Please input a link to an article you want to review.</p>

        <InputLinkTextArea />

        <NavButton 
          buttonText = "Continue"
          destination = "/articleInput" 
        />

      </div>
    </main>
  );
}