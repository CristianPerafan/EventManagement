import {Request, Response} from 'express';
class EventController{
    public async create(req:Request, res:Response){
        return res.status(200).json({
            message: "authorized"
        });
    }
}export default new EventController();