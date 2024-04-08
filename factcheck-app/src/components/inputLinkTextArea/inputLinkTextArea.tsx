import styles from "./inputLinkTextArea.module.css";

export default function InputLinkTextArea() {
    return (
        <div className={styles.i_link_text_area_div}>
            <textarea className={styles.i_link_text_area} name="InputLinkTextArea" id="InputLinkTextArea" placeholder="https://somelink.com/..."></textarea>
        </div>
    );
}