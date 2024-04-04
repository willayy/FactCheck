import styles from "./reviewTextButton.module.css";

export default function ReviewTextButton() {
    return (
        <div className={styles.rt_button_div}>
            <button className={styles.rt_button}>Review text</button>
        </div>
    );
}