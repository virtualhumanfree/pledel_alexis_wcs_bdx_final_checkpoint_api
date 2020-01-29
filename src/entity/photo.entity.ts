import { Animal } from './animal.enity';
import { Numero } from './numero.entity';
import { Artist } from './artist.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Lieu } from './lieu.entity';

@Entity('photo')
export class Photo {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', nullable: false})
    title!: string;

    @Column({type: 'varchar', nullable: false})
    description!: string;

    @OneToOne(type => Lieu, lieu => lieu.photo)
    @JoinColumn()
    lieu!: Lieu;

    @ManyToOne(
        type => Artist,
        artist => artist.photos, { nullable: true })
    artist!: Artist;

    @ManyToOne(
        type => Numero,
        numero => numero.photos, { nullable: true })
    numero!: Numero;

    @ManyToOne(
        type => Animal,
        animal => animal.photos, { nullable: true })
    animal!: Animal;

    constructor(input: Photo) {
        Object.assign(this, input);
      }
}
