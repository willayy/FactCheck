import React, {ChangeEvent} from 'react';
import styles from "./linkInput.module.css";

type InputLinkProps = {
    value: string
    valueSetter: (value: ChangeEvent<HTMLInputElement>) => void
}

export default function LinkInput(props: InputLinkProps) {

    return (
        <div className={styles.i_link_text_area_div}>

            <input 
                className={styles.i_link_text_area} 
                name="InputLink" 
                id="InputLink" 
                placeholder="https://somelink.com/..." 
                type="text"
                value={props.value}
                onChange={props.valueSetter}
                >
            </input>

        </div>
    );
}