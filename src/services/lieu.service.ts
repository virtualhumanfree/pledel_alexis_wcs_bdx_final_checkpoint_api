import { LieuRepository } from '../repository/lieu.repository';
import { getCustomRepository, ObjectLiteral } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class LieuService {

    private repository = getCustomRepository(LieuRepository);

    // Business logic
    async getAll() {
        return await this.repository.find( { relations: ['photo', 'event'] } );
    }

    async getById(lieuId: number) {
        return await this.repository.findOne( { id : lieuId } );
    }

    async update(idElement: number, element: ObjectLiteral) {
        const one = await this.repository.findOne(idElement);
        if (!one) {
          throw new Error(`l'objet d'id ${idElement} n'existe pas `);
        }
        this.repository.merge(one, element);
        return this.repository.save(one , element);
      }

    async create(lieu: any) {
        lieu = this.repository.create(lieu);
        return await this.repository.save(lieu);
    }

}
