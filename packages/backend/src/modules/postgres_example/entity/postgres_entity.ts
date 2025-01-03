import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostgresExample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;
}
