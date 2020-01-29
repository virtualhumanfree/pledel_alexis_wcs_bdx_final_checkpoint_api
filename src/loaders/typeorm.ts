import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';

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
    ],
    synchronize: true,
});
};
