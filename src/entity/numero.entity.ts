import { Photo } from './photo.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToOne } from 'typeorm';
import { Event } from './event.entity';
import { Artist } from './artist.entity';

@Entity('numero')
export class Numero {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', nullable: false})
    title!: string;

    @Column({type: 'varchar', nullable: false})
    description!: string;

    @Column()
    duration!: string;

    @OneToMany(
        type => Photo,
        photo => photo.numero, {eager: true})
      photos!: Photo[];

    @ManyToOne(
        type => Event,
        event => event.numeros, { nullable: true })
      event!: Event;

    @OneToMany(
        type => Artist,
        artist => artist.numero, {eager: true})
    artists!: Artist[];

    constructor(input: Numero) {
        Object.assign(this, input);
      }
}
