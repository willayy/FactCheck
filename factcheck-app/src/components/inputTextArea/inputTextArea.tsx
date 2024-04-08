import styles from "./inputTextarea.module.css";

const InputTextArea = (props: { placeholder: string }) => {
    return (
        <textarea className={styles.i_text_area} name="InputTextArea" id="InputTextArea" placeholder={props.placeholder}></textarea>
    );
}

export default InputTextArea;