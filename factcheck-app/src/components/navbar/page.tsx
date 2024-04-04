import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navBar}>
                <p className={styles.navBar_p}>Home</p>
                <p className={styles.navBar_p}>About</p>
        </div>
    );
}