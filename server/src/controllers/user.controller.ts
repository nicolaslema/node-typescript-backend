import {Request, Response} from 'express'
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../services/user.services'
import log from '../utils/logger'
import { omit } from 'lodash';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response){

    try {
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), "password"));
    } catch (e: any) {
        log.error(e)
        return res.sendStatus(409).send(e.message)
        
    }

}