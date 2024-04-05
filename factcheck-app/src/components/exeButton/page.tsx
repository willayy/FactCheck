import styles from "./exeButton.module.css";

const ExeButton = (props: {buttonText: string; }) => {

    return (
        <div className={styles.rt_button_div}>
            <button type="button" className={styles.rt_button}>{props.buttonText}</button>
        </div>
    );
}

export default ExeButton;