import { Event } from './event.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';

export enum TicketRole {
  ADULT = 'adult',
  CHILD = 'child',
  BABY = 'baby',
}

@Entity('ticket')
export class Ticket {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({
      type: 'enum',
      enum: TicketRole,
      default: TicketRole.ADULT,
    })
    role!: TicketRole;

    @Column({type: 'varchar', length: 25, nullable: false})
    prix!: number;

    @ManyToOne(
      type => Event,
      event => event.tickets, { nullable: false })
    event!: Event;

    constructor(input: Ticket) {
        Object.assign(this, input);
      }
}
