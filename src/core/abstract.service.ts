import { AbstractRepository } from './abstract.repository';

export abstract class AbstractService<T> {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    protected abstract repository: AbstractRepository<T>;

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }

}
