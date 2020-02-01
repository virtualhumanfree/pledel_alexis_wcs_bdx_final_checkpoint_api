import { UserRole } from './../entity/user.entity';
import { checkRole } from './../middleware/check-role-middleware';
import { attachCurrentUser } from './../middleware/attachCurrentUser-middleware';
import express, { Router, Request, Response, Application } from 'express';
import { LieuService } from '../services/lieu.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const LieuController = (app: Application) => {

    const lieuRouter: Router = express.Router();
    const lieuService = new LieuService();

    lieuRouter.get('/', async (req: Request, res: Response) => {
        res.send(await lieuService.getAll());
    });

    lieuRouter.post('/', async (req: Request, res: Response) => {
        const lieu = req.body;
        res.send(await lieuService.create(lieu));
    });

    lieuRouter.put('/:id', attachCurrentUser, checkRole([ UserRole.ADMIN, UserRole.USER ]), async (req: Request, res: Response) => {
        const obj = await lieuService.update(parseInt(req.params.id, 10), req.body);
        res.send(obj);
      });

    app.use('/lieu', lieuRouter);
};
