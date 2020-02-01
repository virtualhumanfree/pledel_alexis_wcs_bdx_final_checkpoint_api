import { UserRole } from './../entity/user.entity';
import { checkRole } from './../middleware/check-role-middleware';
import { attachCurrentUser } from './../middleware/attachCurrentUser-middleware';
import express, { Router, Request, Response, Application } from 'express';
import { UserService } from '../services/user.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {

    const userRouter: Router = express.Router();
    const userService = new UserService();

    userRouter.get('/', async (req: Request, res: Response) => {
        res.send(await userService.getAll());
    });

    // Sur l'URL "me" dans "users", on récupère l'utilisateur associé à l'ID qu'il y a dans le Token
    userRouter.get('/me', async (req: Request, res: Response) => {
        let user = (req.body);
        console.log(user);

        // console.log((req as any).user);
        // console.log((req as any).user.id);

        try {
            user = await userService.getById(user.id);
        } catch (error) {
            console.log(error);
        }

        if (!user) {
            res.status(404).send('Aucun utilisateur trouvé pour ce token');
        }
        res.send(user);
    });

    // userRouter.post('/', async (req: Request, res: Response) => {
    //     const user = req.body;
    //     res.send(await userService.create(user));
    // });
    userRouter.post('/', attachCurrentUser, checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
        res.send(await userService.add(req.body));
    });

    userRouter.put('/:id', attachCurrentUser, checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
        const obj = await userService.update(parseInt(req.params.id, 10), req.body);
        res.send(obj);
    });

    userRouter.delete('/:id', attachCurrentUser, checkRole([UserRole.ADMIN, UserRole.USER]), async (req: Request, res: Response) => {
        await userService.delete(parseInt(req.params.id, 10));
        res.sendStatus(204);
    });

    app.use('/users', userRouter);
};
