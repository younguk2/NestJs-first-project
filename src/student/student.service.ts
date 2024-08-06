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

  // 학생 추가
  async create(stu_id: string, stu_name: string): Promise<Student> {
    // 엔티티 객체를 올바르게 생성
    const student = this.studentRepository.create({ stu_id, stu_name });
    return this.studentRepository.save(student);
  }

  // 모든 학생 불러오기
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // ID로 학생 불러오기
  async findOne(stu_id: string): Promise<Student | null> {
    return this.studentRepository.findOneBy({ stu_id });
  }
}
