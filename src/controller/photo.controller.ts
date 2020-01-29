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

    photoRouter.post('/', async (req: Request, res: Response) => {
        const photo = req.body;
        res.send(await photoService.create(photo));
    });

    app.use('/photos', photoRouter);
};
