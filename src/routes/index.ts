import { Express } from "express";
import userController from "../controllers/user.controller";
import eventController from "../controllers/event.controller";
import auth from "../middlewares/auth";

const routes = (app: Express) =>{
    app.post('/users', userController.create);
    app.put('/users/:id', userController.updateById);  
    app.delete('/users/:id', userController.delete);  
    app.get('/users/:email/events', auth,userController.getEventsByUser);
    app.post('/login', userController.login);
    app.post('/event/create',auth, eventController.createEvent);
    app.get('/events/filter/date', eventController.getEventsByDate);
    app.get('/events/filter/location', eventController.getEventsByLocation);
    app.get('/events/filter/type', eventController.getEventsByType);
    app.put('/event/update/:id', auth, eventController.updateEvent);
    app.delete('/event/delete/:id', auth, eventController.deleteEvent);
    app.post('/event/:event_id/subscribe',auth, eventController.subscribe);
    app.get('/event/:event_id/attendees',auth, eventController.getAttendees);
    
};

export default routes;