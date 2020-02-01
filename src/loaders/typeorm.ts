import { Token } from './../entity/token.entity';
import { Ticket } from './../entity/ticket.entity';
import { Numero } from './../entity/numero.entity';
import { Lieu } from './../entity/lieu.entity';
import { Artist } from './../entity/artist.entity';
import { Animal } from './../entity/animal.enity';
import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';
import { Event } from './../entity/event.entity';
import { Photo } from './../entity/photo.entity';

export default async () => {

await createConnection({
    type: 'mysql',
    host: process.env.HACKATHON_API_DB_HOST,
    port: parseInt(process.env.HACKATHON_API_DB_PORT || '3306', 10),
    username: process.env.HACKATHON_API_DB_USER,
    password: process.env.HACKATHON_API_SOLAR_DB_PASSWORD,
    database: process.env.HACKATHON_API_DB_DATABASE,
    entities: [
        User,
        Animal,
        Artist,
        Event,
        Lieu,
        Numero,
        Photo,
        Ticket,
        Token,
    ],
    synchronize: true,
});
};
