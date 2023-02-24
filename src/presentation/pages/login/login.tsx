
import React, {useState, useEffect} from "react"
import styles from "./login-styles.scss"
import {LoginHeader, Footer, Input, FormStatus} from "@/presentation/components/"
import Context from "@/presentation/contexts/form/form-context"
import { Validation } from "@/presentation/protocols/validation"

type Props = {
    validation?: Validation
}

const Login:React.FC<Props> = ({validation}: Props) => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        mainError: '',
    })

    useEffect(() => {
        setState({
            ...state,
            emailError: validation.validate('email', state.email),
            passwordError: validation.validate('password', state.password)
        })
    }, [state.email, state.password])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        setState({...state, isLoading: true})
    }

    return(
        <div className={styles.login}>
            <LoginHeader />
            <Context.Provider value={{state, setState}}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <Input  type="email" name="email" placeholder="Digite seu e-mail"  />
                    <Input type="password" name="password" placeholder="Digite sua senha" />
                    <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={styles.submit} type="submit">Entrar</button>
                    <span className={styles.link}>Criar conta</span>
                    <FormStatus />
                </form>
            </Context.Provider>
            <Footer />
        </div>
    )
}

export default Login
