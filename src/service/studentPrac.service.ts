import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entity/Student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(stu_id: string, stu_name: string): Promise<Student> {
    const student = this.studentRepository.create({ stu_id, stu_name });
    return this.studentRepository.save(student);
  }
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(stu_id: string): Promise<Student | null> {
    return this.studentRepository.findOneBy({ stu_id });
  }
}
