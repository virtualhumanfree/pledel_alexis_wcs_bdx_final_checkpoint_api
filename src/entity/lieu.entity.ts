import { Photo } from './photo.entity';
import { Event } from './event.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm';

@Entity('lieu')
export class Lieu {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    name!: string;

    @Column()
    city!: string;

    @Column()
    address!: string;

    @Column()
    postcode!: string;

    @OneToOne(type => Photo, photo => photo.lieu)
    photo!: Photo;

    @OneToOne(type => Event, event => event.lieu, { nullable: true })
    event!: Event;

    constructor(input: Lieu) {
        Object.assign(this, input);
      }
}
