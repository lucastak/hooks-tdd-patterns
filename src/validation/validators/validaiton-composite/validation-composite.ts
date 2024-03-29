import { Validation } from "@/presentation/protocols/validation"
import { FieldValidation } from "@/validation/protocols/field-validation"

export class ValidationComposite implements Validation {
    constructor(private readonly validators: FieldValidation[]) { }

    validate(fieldName: string, fieldValue: string): string {
        const validators = this.validators.filter(validator => validator.field === fieldName)
        for (const valitator of validators) {
            const error = valitator.validate(fieldValue)
            if (error) {
                return error.message
            }
        }
    }
}
