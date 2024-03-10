import { Express } from "express";
import userController from "../controllers/user.controller";
import eventController from "../controllers/event.controller";
import auth from "../middlewares/auth";

const routes = (app: Express) =>{
    app.post('/users', userController.create);
    app.put('/users/:id', userController.updateById);  
    app.delete('/users/:id', userController.delete);  
    app.post('/login', userController.login);
    app.post('/event/create',auth, eventController.create);
};

export default routes;