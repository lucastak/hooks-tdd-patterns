import React, {memo} from "react";
import styles from "./footer-styles.scss"

const Footer: React.FC= () => {
    return(
        <footer className={styles.footer}></footer>
    )
}

export default memo(Footer)
