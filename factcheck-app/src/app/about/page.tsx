
import styles from './about.module.css';

export default function Page() {
  return (
    <main className={styles.main}>

      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>What is Factcheck?</h1>
        
        <br></br>

        <p className={styles.description}>
            FactCheck is a project trying to leverage the power of LLMs <br/>
            to generate quality reviews on news articles or other types of written and opinion formming pieces of information.
            <br/>
            <br/>
            The ultimate goal is to create a moderated database of reviews that can be accessed and rated by the community. <br/>
            Leveraging the the sizeable amount of internet users to constantly provide new data to a growing database of reviews.
        </p>

      </div>

    </main>
  );
}