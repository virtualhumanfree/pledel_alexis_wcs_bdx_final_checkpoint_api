import { Artist } from './../entity/artist.entity';
import { PhotoService } from './photo.service';
import { PhotoRepository } from './../repository/photo.repository';
import { ArtistRepository } from '../repository/artist.repository';
import { getCustomRepository, ObjectLiteral } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class ArtistService {

    private repository = getCustomRepository(ArtistRepository);
    private photoRepository = getCustomRepository(PhotoRepository);
    private photoService = new PhotoService();

    // Business logic
    async getAll() {
        return await this.repository.find({ relations: ['photos', 'animal', 'numero', 'event'] });
    }

    async getArtistNotAssign() {
      return await this.repository.find({ where : { numero: null } });
  }

    async getById(artisteId: number) {
        return await this.repository.findOne( { id : artisteId } );
    }

    async update(idElement: number, element: ObjectLiteral) {
        const one = await this.repository.findOne(idElement);
        if (!one) {
          throw new Error(`l'objet d'id ${idElement} n'existe pas `);
        }
        this.repository.merge(one, element);
        return this.repository.save(one , element);
      }

    async create(artist: Artist) {
            // artist = this.repository.create(artist);
            return await this.repository.save(artist);
    }

    delete(id: number) {
      return this.repository.delete(id);
  }

}
