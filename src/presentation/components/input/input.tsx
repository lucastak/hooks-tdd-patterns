
import React, {useContext} from "react";
import styles from "./input-styles.scss"
import Context from "@/presentation/contexts/form/form-context"


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props>= (props: Props) => {
    const {errorState} = useContext(Context)
    const error = errorState[props.name]

    console.log("props", props);


    const enableInput = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        event.target.readOnly = false
    }

    const getStatus = (): string => {
        return '🔴'
    }

    const getTitle = (): string => {
        return error
    }

    return(
        <div className={styles.inputWrap}>
            <input {...props} readOnly onFocus={enableInput} />
            <span data-testid={`${props.name}-status`} title={getTitle()} className={styles.status}>{getStatus()}</span>
        </div>
    )
}

export default Input



