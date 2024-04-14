"use client"

import OutputTextArea from "@/components/outputTextArea/outputTextArea";
import styles from "./articleInput.module.css";
import ExecuteReviewButton from "@/components/executeReviewButton/executeReviewButton";
import { useEffect, useState } from "react";
import { scrapeTextFromUrl } from "../scrapeurl/scripts";

export default function Page() {

  // Set the initial state of the fetched text.
  const [fetchedText, setFetchedText] = useState<string>("");

  useEffect(() => {
    // Fetch the input link from local storage and scrape the text from the URL.
    const fetchedInputLink = localStorage.getItem('inputLink');
    if (fetchedInputLink) {
      scrapeTextFromUrl(fetchedInputLink).then((text) => {
        setFetchedText(text);
      });
    }

    // Set the fetched text to a loading message.
    setFetchedText("Fetching article information");
    
    // While loading make dots appear and disappear to indicate loading.
    const interval = setInterval(() => {
      setFetchedText((text) => {
        if (text.startsWith("Fetching article information")) {
          return text.endsWith("...") ? text.slice(0, -3) : text + ".";
        } else {
          clearInterval(interval); // Stop the interval if loading is complete
          return text; // Return the fetched text as is
        }
      });
    }, 500);
    return () => clearInterval(interval);

  }, [] /*<--- Run only once when the page is loaded */);

  return (
    <main className={styles.main}>

      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Fetched text</h1>

        <p className={styles.description}>Text scraped from the input url</p>

        <OutputTextArea placeholder = "Not fetching..." width={"75%"} height={"500px"} output={fetchedText}/>

        <ExecuteReviewButton buttonText = "Review text!" />

        <h2 className={styles.factchecklogo}>FactCheck verdicts</h2>

        <p className={styles.description}>These verdicts are far from perfect as LLM's are prone to hallucination, feel free to suggest changes</p>

        <OutputTextArea placeholder= "Factcheck verdict" width={"75%"} height={"500px"} />

      </div>
      
    </main>
  );
}
