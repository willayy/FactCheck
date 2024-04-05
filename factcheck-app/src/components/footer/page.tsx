import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <p className={styles.footer_p}>Contact:</p>
                <a className={styles.footer_link} href="https://github.com/willayy">GitHub</a>
                <a className={styles.footer_link} href="https://www.linkedin.com/in/william-norland/">LinkedIn</a>
                <p className={styles.footer_link}>williamnorland@gmail.com</p>
            </div>
        </footer>
    );
}