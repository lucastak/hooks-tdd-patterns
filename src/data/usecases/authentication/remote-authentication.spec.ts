import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClient } from "data/protocols/http/http-post-client"

describe('RemoteAuthentication', () => {
    test('Should call HttpPostCliente with correct URL', async () => {
        class HttpPostClienteSpy implements HttpPostClient{
            url?: string

            async post(url: string): Promise<void> {
                this.url = url
                return Promise.resolve()
            }

        }
        const url = 'any_url'
        const httpPostCLientSpy = new HttpPostClienteSpy()
        const sut = new RemoteAuthentication(url, httpPostCLientSpy)
        await sut.auth()
        expect(httpPostCLientSpy.url).toBe(url)
    })
})
