import express, { Router, Request, Response, Application } from 'express';
import { ArtistService } from '../services/artist.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const ArtistController = (app: Application) => {

    const artistRouter: Router = express.Router();
    const artistService = new ArtistService();

    artistRouter.get('/', async (req: Request, res: Response) => {
        res.send(await artistService.getAll());
    });

    artistRouter.post('/', async (req: Request, res: Response) => {
        const artist = req.body;
        res.send(await artistService.create(artist));
    });

    app.use('/artists', artistRouter);
};
