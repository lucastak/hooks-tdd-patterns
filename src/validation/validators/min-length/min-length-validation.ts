import { InvalidFieldError } from "@/validation/errors/invalid-field-error";
import { FieldValidation } from "@/validation/protocols/field-validation";

export default class MinLengthValidation implements FieldValidation {
    constructor(readonly field: string, private readonly minLength: number){}

    validate(value: string): Error {
        return value.length >= this.minLength ? null : new InvalidFieldError()
    }

}
