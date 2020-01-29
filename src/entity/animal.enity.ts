import { Photo } from './photo.entity';
import { Artist } from './artist.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';

@Entity('animal')
export class Animal {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    name!: string;

    @Column()
    race!: string;

    @Column()
    description!: string;

    @OneToMany(
      type => Artist,
      artist => artist.animal)
    artists!: Artist[];

    @OneToMany(
      type => Photo,
      photo => photo.animal)
      photos!: Photo[];

    constructor(input: Animal) {
        Object.assign(this, input);
      }
}
