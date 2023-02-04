
import React from "react"
import styles from "./login-styles.scss"
import Spinner from "@/presentation/components/spinner/spinner"

const Login:React.FC = () => {
    return(
        <div className={styles.login}>
            <header className={styles.header}>
                <img src="data:image/png;base64,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" />
                <h1>Enquetes para Programadores</h1>
            </header>
            <form className={styles.form}>
                <h2>Login</h2>
                <div className={styles.inputWrap}>
                    <input type="email" name="email" placeholder="Digite seu e-mail " />
                    <span className={styles.status}>🔴</span>
                </div>
                <div className={styles.inputWrap}>
                    <input type="password" name="password" placeholder="Digite sua senha " />
                    <span className={styles.status}>🔴</span>
                </div>
                <button className={styles.submit} type="submit">Entrar</button>
                <span className={styles.link}>Criar conta</span>

                <div className={styles.errorWrap}>
                    <Spinner className={styles.spinner} />
                    <span className={styles.error}>Erro</span>
                </div>
            </form>
            <footer className={styles.footer}></footer>
        </div>
    )
}

export default Login