import { Sport } from '../models/sport';
import { SportRepository } from '../repository/sport.repository';
import { AbstractService } from '../core/abstract.service';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique de la ressources sport doit se situer
 * Attention ! Mettez le moins possible d'element dans le controlleur
 * Pour éviter la dupplication des routes "classique" on ajoute les methode usuelle
 * getAll, ... dans la classe mère
 */

export class SportService extends AbstractService<Sport> {

    protected repository: SportRepository;

    constructor() {
        super();
        this.repository = new SportRepository();
    }

}
