import { TicketRepository } from '../repository/ticket.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class TicketService {

    private repository = getCustomRepository(TicketRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(ticket: any) {
        ticket = this.repository.create(ticket);
        return await this.repository.save(ticket);
    }

}
