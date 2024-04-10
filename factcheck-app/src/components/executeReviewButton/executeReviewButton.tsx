import styles from "./executeReviewButton.module.css";

export default function ExecuteReviewButton(props: {buttonText: string; }) {
    return (
        <div className={styles.exe_button_div}>
            <button type="button" className={styles.exe_button}>{props.buttonText}</button>
        </div>
    );
}
