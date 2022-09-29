import { User } from './User';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn, ManyToMany, BaseEntity } from "typeorm"

@Entity()
export class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    lastName: string

    @Column()
    age: number

    @ManyToOne(() => User, (user) => user.post)
    user: User
}
