import { AuthController } from './controller/auth.controller';
import { TicketController } from './controller/ticket.controller';
import { PhotoController } from './controller/photo.controller';
import { NumeroController } from './controller/numero.controller';
import { EventController } from './controller/event.controller';
import { ArtistController } from './controller/artist.controller';
import { AnimalController } from './controller/animal.controller';
import 'reflect-metadata';

import express from 'express';
import loaders from './loaders';

import { UserController } from './controller/user.controller';
import { LieuController } from './controller/lieu.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    UserController(app);
    AnimalController(app);
    ArtistController(app);
    EventController(app);
    LieuController(app);
    NumeroController(app);
    PhotoController(app);
    TicketController(app);
    AuthController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server is running'));
  }

startServer();
