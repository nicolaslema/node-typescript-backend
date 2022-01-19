import { Express, Request, Response } from "express";
import { createUserHandler } from "./controllers/user.controller";
import validateResources from './middleware/validateResource';
import { createUserSchema } from "./schema/user.schema";

function routes(app: Express){
    app.get('/healthceck', (req: Request, res: Response)=> res.sendStatus(200));

    app.post('/api/users', validateResources(createUserSchema),  createUserHandler)

}

export default routes;