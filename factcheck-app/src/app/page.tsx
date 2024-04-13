"use client";

import LinkInputButton from "@/components/linkInputButton/linkInputButton";
import styles from "./homepage.module.css";
import LinkInput from "@/components/linkInput/linkInput";
import { ChangeEvent, useEffect, useState } from "react";

// Regular expression to validate the input link, this is catch all URL regex.
const regex: RegExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export default function Page() {

  // Set the initial state of the input link and the button.
  const [inputLink, setInputLink] = useState<string>("");
  const [inputLinkButtonEnabled, setInputLinkButtonEnabled] = useState<boolean>(false);

  // Try to fetch last input link from local storage.
  useEffect(() => {
    let fetchedInputLink = localStorage.getItem('inputLink');
    if (fetchedInputLink) {
      setInputLink(fetchedInputLink);
    }
  }, [] /*<--- Run only once when the page is loaded */);

  // Save new input and try to validate it.
  useEffect(() => {
    localStorage.setItem('inputLink', inputLink)
    if (regex.test(inputLink)) {
      setInputLinkButtonEnabled(true);
    } else {
      setInputLinkButtonEnabled(false);
    }
  }, [inputLink]);

  // make a function with a ChangeEvent<HTMLInputElement> parameter to set the value of the input link state.
  function setValueToInputLink(event: ChangeEvent<HTMLInputElement>) {
    setInputLink(event.target.value);
  }
  
  return (
    <main className={styles.main}>

      <div className={styles.center_aligned_text_box}>

        <h1 className={styles.factchecklogo}>Welcome to FactCheck</h1>

        <p className={styles.description}>Please input a link to an article you want to review.</p>

        <LinkInput value={inputLink} valueSetter={setValueToInputLink} />
        
        <LinkInputButton destination="/articleInput" enabled={inputLinkButtonEnabled} />

      </div>

    </main>
  );
}