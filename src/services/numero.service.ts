import { NumeroRepository } from '../repository/numero.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class NumeroService {

    private repository = getCustomRepository(NumeroRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(numero: any) {
        numero = this.repository.create(numero);
        return await this.repository.save(numero);
    }

}
