import { InvalidFieldError } from "@/validation/errors/invalid-field-error";
import NewLengthValidation from "./min-length-validation";

describe('MinLength validation', () => {
    test('should return error if valid is invalid', () => {
        const sut = new NewLengthValidation('field', 5)
        const error = sut.validate(`123`)
        expect(error).toEqual(new InvalidFieldError())
    });
});
