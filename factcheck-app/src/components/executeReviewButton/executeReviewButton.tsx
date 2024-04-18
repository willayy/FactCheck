import styles from "./executeReviewButton.module.css";

type ExecuteReviewButtonProps = {
    buttonText: string;
    onClick: () => void;
}

export default function ExecuteReviewButton(props: ExecuteReviewButtonProps) {

    

    return (
        <div className={styles.exe_button_div}>
            <button type="button" className={styles.exe_button} onClick={props.onClick}>{props.buttonText}</button>
        </div>
    );
}
