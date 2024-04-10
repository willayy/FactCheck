import styles from "./inputTextarea.module.css";

const InputText = (props: { placeholder: string }) => {
    return (
        <input className={styles.i_text_area} name="InputText" id="InputText" placeholder={props.placeholder}></input>
    );
}

export default InputText;