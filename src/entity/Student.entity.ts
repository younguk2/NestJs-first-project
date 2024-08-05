/*
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  stu_id: string;

  @Column()
  stu_name: string;
}
*/
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  stu_id: String;

  @Column()
  stu_name: String;
}
