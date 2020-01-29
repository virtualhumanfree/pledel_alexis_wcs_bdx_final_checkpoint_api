import express, { Router, Request, Response, Application } from 'express';
import { EventService } from '../services/event.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const EventController = (app: Application) => {

    const eventRouter: Router = express.Router();
    const eventService = new EventService();

    eventRouter.get('/', async (req: Request, res: Response) => {
        res.send(await eventService.getAll());
    });

    eventRouter.post('/', async (req: Request, res: Response) => {
        const event = req.body;
        res.send(await eventService.create(event));
    });

    app.use('/lieux', eventRouter);
};
