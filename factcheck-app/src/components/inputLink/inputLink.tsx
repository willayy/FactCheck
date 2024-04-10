import styles from "./inputLinkTextArea.module.css";

export default function InputLink() {
    return (
        <div className={styles.i_link_text_area_div}>
            <input className={styles.i_link_text_area} name="InputLink" id="InputLink" placeholder="https://somelink.com/..."></input>
        </div>
    );
}