import {
    controller,
    httpGet,
    httpPost,
    requestBody,
    requestParam,
    response,
  } from 'inversify-express-utils';
import { Response } from 'express';
import { ExampleRequest } from '../models/ExampleRequest';
import { ExampleResponse } from '../models/ExampleResponse';
  
@controller('/example')
export class ExampleController {

@httpPost('/create')
public async createExample(
    @response() res: Response,
    @requestBody() newExample: ExampleRequest,
): Promise<ExampleResponse | undefined> {
        try {
            return new ExampleResponse();
        } catch (error: unknown) {
            res.status(500);
            if (error instanceof Error) {
                res.send(error.message);
            }
        }
    }

@httpGet('/:id')
public async getExample(
    @response() res: Response,
    @requestParam('id') idParam: string,
): Promise<ExampleResponse | undefined> {
        try {
            return new ExampleResponse();
        } catch (error: unknown) {
            res.status(500);
            if (error instanceof Error) {
                res.send(error.message);
            }
        }
    }
}