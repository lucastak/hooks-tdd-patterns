
import React, {useContext} from "react";
import styles from "./input-styles.scss"
import Context from "@/presentation/contexts/form/form-context"


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props>= (props: Props) => {
    const {state, setState} = useContext(Context)
    const error = state[`${props.name}Error`]

    console.log("props", props);


    const enableInput = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        event.target.readOnly = false
    }

    const handleChange = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const getStatus = (): string => {
        return '🔴'
    }

    const getTitle = (): string => {
        return error
    }

    return(
        <div className={styles.inputWrap}>
            <input data-testid={props.name} {...props} readOnly onFocus={enableInput} onChange={handleChange} />
            <span data-testid={`${props.name}-status`} title={getTitle()} className={styles.status}>{getStatus()}</span>
        </div>
    )
}

export default Input



