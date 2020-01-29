import { LieuRepository } from './../repository/lieu.repository';
import { LieuService } from './lieu.service';
import { Photo } from './../entity/photo.entity';
import { PhotoRepository } from '../repository/photo.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class PhotoService {

    private repository = getCustomRepository(PhotoRepository);
    private lieuRepository = getCustomRepository(LieuRepository);
    private lieuService = new LieuService();

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(photo: Photo) {
        const lieuFind = await this.lieuRepository.findOne(photo.lieu.id);
        if (lieuFind?.id === undefined) {
            const lieu = this.repository.create(photo.lieu);
            await this.repository.save(lieu);
            photo = this.repository.create(photo);
            return await this.repository.save(photo);
        } else {
            photo = this.repository.create(photo);
            return await this.repository.save(photo);
        }
    }
}
