import React from "react";
import styles from "./spinner-styles.scss"

type Props = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<Props> = (props: Props) => {
    return(
        <div data-testid="spinner" {...props} className={[styles.spinner, props.className].join(" ")}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner
