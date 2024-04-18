"use client"

import OutputTextArea from "@/components/outputTextArea/outputTextArea";
import styles from "./articleInput.module.css";
import ExecuteReviewButton from "@/components/executeReviewButton/executeReviewButton";
import { useEffect, useState } from "react";
import { scrapeTextFromUrl } from "../scrapeurl/scripts";
import { local_aiReviewText } from "@/app/aireviewtext/scripts";
import { rollingDots } from "@/scripts/rollingdots";

export default function Page() {

  // Set the initial state of the fetched text.
  const [fetchedText, setFetchedText] = useState<string>("");
  const [reviewedText, setReviewedText] = useState<string>("");

  useEffect(() => {
    // Fetch the input link from local storage and scrape the text from the URL.
    const fetchedInputLink = localStorage.getItem('inputLink');
    if (fetchedInputLink) {
      let interval: NodeJS.Timeout;
      rollingDots("Fetching article information",setFetchedText).then((returnInterval) => {
        interval = returnInterval;
      });
      scrapeTextFromUrl(fetchedInputLink).then((text) => {
        clearInterval(interval)
        setFetchedText(text);
      });
    }
  }, [] /*<--- Run only once when the page is loaded */);

  // Function to execute the review of the fetched text.
  const executeReview = () => {
    let interval: NodeJS.Timeout;
    rollingDots("Reviewing article",setReviewedText).then((returnInterval) => {
      interval = returnInterval;
    });
    local_aiReviewText(fetchedText).then((reviewedText) => {
      clearInterval(interval);
      setReviewedText(reviewedText ?? "Error: No response from the AI model");
    });
  };

  return (
    <main className={styles.main}>

      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Fetched text</h1>

        <p className={styles.description}>Text scraped from the input url</p>

        <OutputTextArea placeholder = "Not fetching..." width={"75%"} height={"500px"} output={fetchedText}/>

        <ExecuteReviewButton buttonText = "Review text!" onClick={executeReview} />

        <h2 className={styles.factchecklogo}>FactCheck verdicts</h2>

        <p className={styles.description}>These verdicts are far from perfect as LLM's are prone to hallucination, feel free to suggest changes</p>

        <OutputTextArea placeholder= "Factcheck verdict" width={"75%"} height={"500px"} output={reviewedText}/>

      </div>
      
    </main>
  );
}
