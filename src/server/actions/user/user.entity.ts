import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  avatar!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  role!: string;

  @Column()
  status!: number;

  @Column()
  created_at!: string;

  @Column()
  updated_at!: string;

  @Column()
  deleted_at!: string;
}
