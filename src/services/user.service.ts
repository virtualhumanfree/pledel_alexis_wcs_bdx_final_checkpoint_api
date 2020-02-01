import { UserRepository } from '../repository/user.repository';
import { User } from '../entity/user.entity';
import { getCustomRepository, ObjectLiteral } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService {

    private repository = getCustomRepository(UserRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    getById(id: number) {
        const getId = this.repository.findOne(id);
        if (!getId) {
          throw new Error(`l'objet d'id ${id} n'existe pas `);
        }
        return getId;
      }

    async userActivation(user: User) {
        user.isActive = true;
        await this.repository.update(user.id, user);
    }

    // async create(user: any) {
    //     user = this.repository.create(user);
    //     return await this.repository.save(user);
    // }

    async add(element: any) {
        element = await this.repository.create(element);
        return this.repository.save(element);
    }

    async update(idElement: number, element: ObjectLiteral) {
        const one = await this.repository.findOne(idElement);
        if (!one) {
            throw new Error(`l'objet d'id ${idElement} n'existe pas `);
        }
        this.repository.merge(one, element);
        return this.repository.save(one, element);

    }

    delete(id: number) {
        return this.repository.delete(id);
    }

}
