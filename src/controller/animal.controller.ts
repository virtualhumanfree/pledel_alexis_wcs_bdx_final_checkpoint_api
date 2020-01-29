import express, { Router, Request, Response, Application } from 'express';
import { AnimalService } from '../services/animal.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const AnimalController = (app: Application) => {

    const animalRouter: Router = express.Router();
    const animalService = new AnimalService();

    animalRouter.get('/', async (req: Request, res: Response) => {
        res.send(await animalService.getAll());
    });

    animalRouter.post('/', async (req: Request, res: Response) => {
        const animal = req.body;
        res.send(await animalService.create(animal));
    });

    app.use('/animals', animalRouter);
};
