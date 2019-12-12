import { AbstractRepository } from '../core/abstract.repository';
import { Sport } from '../models/sport';
/**
 * Notre répository hérite de AbstractRepository
 * Il récupère ainsi toutes les methode classique (getALL, ...)
 * On doit quand même définir le nom de la table
 * Ainsi que le type de l'objet que
 */

export class SportRepository extends AbstractRepository<Sport> {
    // Le nom de la table qui sera utilisé au niveau de la classe abstraite
    protected TABLE_NAME = 'sport';

}
