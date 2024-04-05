import styles from "./continueButton.module.css";

const ContinueButton = ({ buttonText }: { buttonText: string }) => {
    return (
        <div className={styles.rt_button_div}>
            <button className={styles.rt_button}>{buttonText}</button>
        </div>
    );
}

export default ContinueButton;