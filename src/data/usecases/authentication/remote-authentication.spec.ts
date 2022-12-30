import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClienteSpy } from "../../test/mock-http-client"

describe('RemoteAuthentication', () => {
    test('Should call HttpPostCliente with correct URL', async () => {
        const url = 'any_url'
        const httpPostCLientSpy = new HttpPostClienteSpy()
        const sut = new RemoteAuthentication(url, httpPostCLientSpy)
        await sut.auth()
        expect(httpPostCLientSpy.url).toBe(url)
    })
})
