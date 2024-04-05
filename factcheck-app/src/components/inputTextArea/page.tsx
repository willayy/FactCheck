import styles from "./inputTextarea.module.css";

const InputTextArea = ({ placeholder }: { placeholder: string }) => {
    return (
        <textarea className={styles.i_text_area} name="InputTextArea" id="InputTextArea" placeholder={placeholder}></textarea>
    );
}

export default InputTextArea;