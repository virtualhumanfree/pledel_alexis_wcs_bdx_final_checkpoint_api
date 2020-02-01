import { Column, Entity, PrimaryGeneratedColumn, Index, CreateDateColumn } from 'typeorm';

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
  }

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    firstname!: string;

    @Column({type: 'varchar', length: 25, nullable: false})
    lastname!: string;

    @Column({})
    password!: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    tel!: string;

    @Index({ unique: true })
    @Column()
    email!: string;

    @Column({ default: false })
  isActive: boolean = false;

    @Column({
      type: 'enum',
      enum: UserRole,
      default: UserRole.ADMIN,
    })
    role!: UserRole;

    @CreateDateColumn()
    createdAt!: Date;

    @CreateDateColumn()
    updateAt!: Date;

    constructor(input: User) {
        Object.assign(this, input);
      }
}
