import { EventRepository } from '../repository/event.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class EventService {

    private repository = getCustomRepository(EventRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(event: any) {
        event = this.repository.create(event);
        return await this.repository.save(event);
    }

}
