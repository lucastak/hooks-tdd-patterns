import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClienteSpy } from "@/data/test/mock-http-client"
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { mockAuthentication } from "@/domain/test/mock-authentication";
import { InvalidCredentialsError } from "@/domain/erros/invalid-credentials-error";
import { UnexpectedError } from "@/domain/erros/unexpected-error";
import { faker } from '@faker-js/faker';

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClienteSpy
}

const makeSut = (url : string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClienteSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    return{
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient with correct URL', async () => {
        const url = faker.internet.url()
        const {sut, httpPostClientSpy} = makeSut(url)
        await sut.auth(mockAuthentication())
        expect(httpPostClientSpy.url).toBe(url)
    })

    test('Should call HttpPostClient with correct body', async () => {
        const {sut, httpPostClientSpy} = makeSut()
        const authenticationParams = mockAuthentication()
        await sut.auth(authenticationParams)
        expect(httpPostClientSpy.body).toEqual(authenticationParams)
    })

    test('Should throw InvalidCredentialsError if HttpPostClient Returns 401', async () => {
        const {sut, httpPostClientSpy} = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.unathorized
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpPostClient Returns 400', async () => {
        const {sut, httpPostClientSpy} = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpPostClient Returns 500', async () => {
        const {sut, httpPostClientSpy} = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpPostClient Returns 500', async () => {
        const {sut, httpPostClientSpy} = makeSut()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })
})
