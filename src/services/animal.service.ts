import { AnimalRepository } from '../repository/animal.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class AnimalService {

    private repository = getCustomRepository(AnimalRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(animal: any) {
        animal = this.repository.create(animal);
        return await this.repository.save(animal);
    }

}
