import { UserRole } from './../entity/user.entity';
import { checkRole } from './../middleware/check-role-middleware';
import { attachCurrentUser } from './../middleware/attachCurrentUser-middleware';
import express, { Router, Request, Response, Application } from 'express';
import { PhotoService } from '../services/photo.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const PhotoController = (app: Application) => {

    const photoRouter: Router = express.Router();
    const photoService = new PhotoService();

    photoRouter.get('/', async (req: Request, res: Response) => {
        res.send(await photoService.getAll());
    });

    photoRouter.get('/photoNotAssign', async (req: Request, res: Response) => {
        res.send(await photoService.getPhotoNotAssign());
    });

    photoRouter.post('/', async (req: Request, res: Response) => {
        const photo = req.body;
        res.send(await photoService.create(photo));
    });

    photoRouter.put('/:id', attachCurrentUser, checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
        const obj = await photoService.update(parseInt(req.params.id, 10), req.body);
        res.send(obj);
    });

    photoRouter.delete('/:id', async (req: Request, res: Response) => {
        await photoService.delete(parseInt(req.params.id, 10));
        res.sendStatus(204);
    });

    app.use('/photos', photoRouter);
};
