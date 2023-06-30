import { InvalidFieldError } from "@/validation/errors/invalid-field-error";
import MinLengthValidation from "./min-length-validation";

import { faker } from "@faker-js/faker";


const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.database.column(), 5)

describe('MinLength validation', () => {
    test('should return error if valid is invalid', () => {
        const sut = makeSut()
        const error = sut.validate(faker.random.alphaNumeric(4))
        expect(error).toEqual(new InvalidFieldError())
    });

    test('should return falsy if valid is valid', () => {
        const sut = makeSut()
        const error = sut.validate(faker.random.alphaNumeric(5))
        expect(error).toBeFalsy()
    });
});
