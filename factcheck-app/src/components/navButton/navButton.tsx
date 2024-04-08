"use client"

import styles from "./navButton.module.css";
import { useRouter } from 'next/navigation'

const NavButton = (props: { destination: string; buttonText: string; }) => {

    const router = useRouter()

    return (
        <div className={styles.nav_button_div}>
            <button type="button" className={styles.nav_button} onClick={() => router.push(props.destination)}>{props.buttonText}</button>
        </div>
    );
}

export default NavButton;