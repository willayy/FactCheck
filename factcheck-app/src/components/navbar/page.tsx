"use client";

import styles from "./navbar.module.css";
import {useRouter} from "next/navigation";

export default function Navbar() {

    const router = useRouter();

    return (
        <div className={styles.navBar}>
                <p className={styles.navBar_p} onClick={()=>{router.push("/")}}>Home</p>
                <p className={styles.navBar_p} onClick={()=>{router.push("/about")}}>About</p>
        </div>
    );
}