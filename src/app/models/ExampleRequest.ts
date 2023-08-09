export class ExampleRequest {
    name: string;
    description: string;

    constructor(req: ExampleRequest) {
        Object.assign(this, req);
    }
}