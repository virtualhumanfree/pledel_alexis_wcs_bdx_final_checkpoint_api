import { EventRepository } from '../repository/event.repository';
import { getCustomRepository, ObjectLiteral } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class EventService {

    private repository = getCustomRepository(EventRepository);

    // Business logic
    async getAll() {
        return await this.repository.find({ relations: ['lieu', 'numeros', 'artists', 'tickets'] });
    }

    async update(idElement: number, element: ObjectLiteral) {
        const one = await this.repository.findOne(idElement);
        if (!one) {
          throw new Error(`l'objet d'id ${idElement} n'existe pas `);
        }
        this.repository.merge(one, element);
        return this.repository.save(one , element);
      }

    async create(event: any) {
        event = this.repository.create(event);
        return await this.repository.save(event);
    }

    delete(id: number) {
      return this.repository.delete(id);
  }

}
