
import React from "react"
import styles from "./login-styles.scss"
import Spinner from "@/presentation/components/spinner/spinner"
import LoginHeader from "@/presentation/components/login-header/login-header"
import Footer from "@/presentation/components/footer/footer"
import Input from "@/presentation/components/input/input"

const Login:React.FC = () => {
    return(
        <div className={styles.login}>
            <LoginHeader />
            <form className={styles.form}>
                <h2>Login</h2>
                <Input type="email" name="email" placeholder="Digite seu e-mail "  />
                <Input type="password" name="password" placeholder="Digite sua senha" />
                <button className={styles.submit} type="submit">Entrar</button>
                <span className={styles.link}>Criar conta</span>

                <div className={styles.errorWrap}>
                    <Spinner className={styles.spinner} />
                    <span className={styles.error}>Erro</span>
                </div>
            </form>

            <Footer />
        </div>
    )
}

export default Login
