import { Animal } from './animal.enity';
import { Event } from './event.entity';
import { Numero } from './numero.entity';
import { Photo } from './photo.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('artist')
export class Artist {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    name_artist!: string;

    @Column({type: 'varchar', length: 25, nullable: false})
    firstname!: string;

    @Column({type: 'varchar', length: 25, nullable: false})
    lastname!: string;

    @Column({type: 'varchar', nullable: false})
    description!: string;

    @OneToMany(
        type => Photo,
        photo => photo.artist)
    photos!: Photo[];

    @ManyToOne(
        type => Numero,
        numero => numero.artists, { nullable: true })
        numero!: Numero;

    @ManyToOne(
        type => Event,
        event => event.artists, { nullable: true })
    event!: Event;

    @ManyToOne(
        type => Animal,
        animal => animal.artists, { nullable: true })
    animal!: Animal;

    constructor(input: Artist) {
        Object.assign(this, input);
      }
}
