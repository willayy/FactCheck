import styles from "./outputTextArea.module.css";

type OutputTextAreaProps = {
    output?: string;
    width?: string;
    height?: string;
    placeholder: string;
    } | {
    output?: string;
    rows?: number;
    cols?: number;
    placeholder: string;
};

const OutputTextArea = (props: OutputTextAreaProps) => {
    if ('rows' in props && 'cols' in props) {
        return (
        <textarea 
            className={styles.o_text_area}
            name="InputTextArea" 
            id="InputTextArea" 
            placeholder={props.placeholder} 
            cols={props.cols} 
            rows={props.rows} 
            value={props.output}
            readOnly={true}>

            </textarea>
        );
    } else if ('width' in props && 'height' in props) {
        return (
        <textarea 
            className={styles.o_text_area} 
            style={{ width: props.width, height: props.height }} 
            name="InputTextArea" 
            id="InputTextArea" 
            placeholder={props.placeholder} 
            value={props.output}>
                
            </textarea>
        );
    }
}

export default OutputTextArea;