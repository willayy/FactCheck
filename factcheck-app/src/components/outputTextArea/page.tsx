import styles from "./outputTextArea.module.css";

const OutputTextArea = (props: { placeholder: string }) => {
    return (
        <textarea className={styles.o_text_area} name="InputTextArea" id="InputTextArea" placeholder={props.placeholder}></textarea>
    );
}

export default OutputTextArea;