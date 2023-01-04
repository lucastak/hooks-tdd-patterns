import { HttpPostClient } from "data/protocols/http/http-post-client"
import { HttpPostParams } from "data/protocols/http/http-post-client"

export class HttpPostClienteSpy implements HttpPostClient{
    url?: string

    async post(params: HttpPostParams): Promise<void> {
        this.url = params.url
        return Promise.resolve()
    }

}
