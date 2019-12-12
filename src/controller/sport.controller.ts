import { Sport } from './../models/sport';
import { SportService } from '../services/sport.service';
import { Router, Request, Response, Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */

export class SportController extends AbstractController<Sport> {
    protected service = new SportService();

    constructor(app: Application) {
        super('sports', app);
    }

    protected setupAdditionalRoute(router: Router): Router {

        router.get('/ttt', async (req: Request, res: Response) => {
            const result = await this.service.getAll();
            res.send(result);
        });

        return router;
    }
}
