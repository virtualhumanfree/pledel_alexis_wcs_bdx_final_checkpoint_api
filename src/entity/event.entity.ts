import { Ticket } from './ticket.entity';
import { Artist } from './artist.entity';
import { Numero } from './numero.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Lieu } from './lieu.entity';

@Entity('evnet')
export class Event {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    title!: string;

    @Column({ nullable: true })
    photobandeau!: string;

    @OneToMany(
        type => Numero,
        numero => numero.event)
    numeros!: Numero[];

    @OneToMany(
        type => Artist,
        artist => artist.event)
    artists!: Artist[];

    @OneToOne(type => Lieu, lieu => lieu.event)
    lieu!: Lieu;

    @OneToMany(
        type => Ticket,
        ticket => ticket.event)
    tickets!: Ticket[];

    constructor(input: Event) {
        Object.assign(this, input);
      }
}
