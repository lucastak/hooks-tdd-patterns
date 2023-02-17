import { Validation } from "@/presentation/protocols/validation"

export class ValidationStub implements Validation {
    errorMessage: string

    validate(errorMessage: string): string {
        return this.errorMessage
    }
}
