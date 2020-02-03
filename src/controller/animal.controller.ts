import { UserRole } from './../entity/user.entity';
import { checkRole } from './../middleware/check-role-middleware';
import { attachCurrentUser } from './../middleware/attachCurrentUser-middleware';
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

    animalRouter.get('/animalNotAssign', async (req: Request, res: Response) => {
        res.send(await animalService.getAnimalNotAssign());
    });

    animalRouter.post('/', async (req: Request, res: Response) => {
        const animal = req.body;
        res.send(await animalService.create(animal));
    });

    animalRouter.put('/:id', attachCurrentUser, checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
        const obj = await animalService.update(parseInt(req.params.id, 10), req.body);
        res.send(obj);
    });

    animalRouter.delete('/:id', async (req: Request, res: Response) => {
        await animalService.delete(parseInt(req.params.id, 10));
        res.sendStatus(204);
    });

    app.use('/animals', animalRouter);
};
