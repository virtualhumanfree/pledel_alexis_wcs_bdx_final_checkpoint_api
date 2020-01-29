import { ArtistRepository } from '../repository/artist.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class ArtistService {

    private repository = getCustomRepository(ArtistRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(artist: any) {
        artist = this.repository.create(artist);
        return await this.repository.save(artist);
    }

}
