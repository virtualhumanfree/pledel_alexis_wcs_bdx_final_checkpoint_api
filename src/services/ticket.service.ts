import { TicketRepository } from '../repository/ticket.repository';
import { getCustomRepository, ObjectLiteral } from 'typeorm';
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

    async update(idElement: number, element: ObjectLiteral) {
        const one = await this.repository.findOne(idElement);
        if (!one) {
          throw new Error(`l'objet d'id ${idElement} n'existe pas `);
        }
        this.repository.merge(one, element);
        return this.repository.save(one , element);
      }

    async create(ticket: any) {
        ticket = this.repository.create(ticket);
        return await this.repository.save(ticket);
    }

    delete(id: number) {
      return this.repository.delete(id);
  }

}
