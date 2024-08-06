import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from '../entity/Student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // 학생 추가
  @Post()
  async create(
    @Body('stu_id') stu_id: string,
    @Body('stu_name') stu_name: string,
  ): Promise<Student> {
    return this.studentService.create(stu_id, stu_name);
  }

  // 모든 학생 조회
  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  // ID로 학생 조회
  @Get(':stu_id')
  async findOne(@Param('stu_id') stu_id: string): Promise<Student | null> {
    return this.studentService.findOne(stu_id);
  }
}
