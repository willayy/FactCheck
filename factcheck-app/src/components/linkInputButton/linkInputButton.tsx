"use client";

import { useRouter } from "next/navigation";
import styles from "./linkInputButton.module.css";

type InputLinkButtonProps = { 
    destination: string, 
    enabled: boolean 
}

export default function LinkInputButton(props: InputLinkButtonProps) {
    
    const router = useRouter();

    return (
        <div className={styles.nav_button_div}>
            <button 
                type="button" 
                className={styles.nav_button} 
                onClick={() => router.push(props.destination)}
                disabled={!props.enabled}>
                Continue
            </button>
        </div>
    );
}