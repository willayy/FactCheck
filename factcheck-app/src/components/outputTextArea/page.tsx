import styles from "./outputTextArea.module.css";

const OutputTextArea = ({ placeholder }: { placeholder: string }) => {
    return (
        <textarea className={styles.o_text_area} name="InputTextArea" id="InputTextArea" placeholder={placeholder}></textarea>
    );
}

export default OutputTextArea;