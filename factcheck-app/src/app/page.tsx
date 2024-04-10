import styles from "./homepage.module.css";
import InputLink from "@/components/inputLink/inputLink";
import NavButton from "@/components/navButton/navButton";

export default function Page() {
  return (
    <main className={styles.main}>

      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Welcome to FactCheck</h1>

        <p className={styles.description}>Please input a link to an article you want to review.</p>

        <InputLink />

        <NavButton 
          buttonText = "Continue"
          destination = "/articleInput" 
        />
      </div>

    </main>
  );
}