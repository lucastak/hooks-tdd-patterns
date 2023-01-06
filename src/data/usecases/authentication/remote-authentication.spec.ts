import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClienteSpy } from "@/data/test/mock-http-client"
import { mockAuthentication } from "@/domain/test/mock-authentication";
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
})
