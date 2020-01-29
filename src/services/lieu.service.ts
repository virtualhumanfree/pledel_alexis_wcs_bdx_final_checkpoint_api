import { LieuRepository } from '../repository/lieu.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class LieuService {

    private repository = getCustomRepository(LieuRepository);

    // Business logic
    async getAll() {
        return await this.repository.find( { relations: ['photo'] } );
    }

    async getById(lieuId: number) {
        return await this.repository.findOne( { id : lieuId } );
    }

    async create(lieu: any) {
        lieu = this.repository.create(lieu);
        return await this.repository.save(lieu);
    }

}
