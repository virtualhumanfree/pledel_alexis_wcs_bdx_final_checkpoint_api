import express, { Router, Request, Response, Application } from 'express';
import { NumeroService } from '../services/numero.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const NumeroController = (app: Application) => {

    const numeroRouter: Router = express.Router();
    const numeroService = new NumeroService();

    numeroRouter.get('/', async (req: Request, res: Response) => {
        res.send(await numeroService.getAll());
    });

    numeroRouter.post('/', async (req: Request, res: Response) => {
        const numero = req.body;
        res.send(await numeroService.create(numero));
    });

    app.use('/numeros', numeroRouter);
};
