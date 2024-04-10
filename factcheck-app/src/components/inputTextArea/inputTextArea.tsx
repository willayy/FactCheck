import styles from "./inputTextArea.module.css";

const InputTextArea = (props: { placeholder: string }) => {
    return (
        <textarea className={styles.i_text_area} name="InputText" id="InputText" placeholder={props.placeholder}></textarea>
    );
}

export default InputTextArea;