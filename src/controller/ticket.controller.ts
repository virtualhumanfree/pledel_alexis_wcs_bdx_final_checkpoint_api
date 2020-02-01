import { UserRole } from './../entity/user.entity';
import { checkRole } from './../middleware/check-role-middleware';
import { attachCurrentUser } from './../middleware/attachCurrentUser-middleware';
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

    ticketRouter.put('/:id', attachCurrentUser, checkRole([ UserRole.ADMIN, UserRole.USER ]), async (req: Request, res: Response) => {
        const obj = await ticketService.update(parseInt(req.params.id, 10), req.body);
        res.send(obj);
      });

    app.use('/tickets', ticketRouter);
};
