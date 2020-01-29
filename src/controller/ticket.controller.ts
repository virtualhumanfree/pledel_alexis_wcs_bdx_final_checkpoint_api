import express, { Router, Request, Response, Application } from 'express';
import { TicketService } from '../services/ticket.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const TicketController = (app: Application) => {

    const ticketRouter: Router = express.Router();
    const ticketService = new TicketService();

    ticketRouter.get('/', async (req: Request, res: Response) => {
        res.send(await ticketService.getAll());
    });

    ticketRouter.post('/', async (req: Request, res: Response) => {
        const ticket = req.body;
        res.send(await ticketService.create(ticket));
    });

    app.use('/tickets', ticketRouter);
};
