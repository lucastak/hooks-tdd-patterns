import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClienteSpy } from "../../test/mock-http-client"

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClienteSpy
}

const makeSut = (url : string = 'aa'): SutTypes => {
    const httpPostClientSpy = new HttpPostClienteSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    return{
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient with correct URL', async () => {
        const url = 'bb'
        const {sut, httpPostClientSpy} = makeSut(url);
        await sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})
