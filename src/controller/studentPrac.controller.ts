import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudentService } from 'src/service/student.service';
import { Student } from 'src/entity/Student.entity';

@Controller('student')
export class StudentConstroller {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(
    @Body('stu_id') stu_id: string,
    @Body('stu_name') stu_name: string,
  ): Promise<Student> {
    return this.studentService.create(stu_id, stu_name);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':stu_id')
  async findOne(@Param('stu_id') stu_id: string): Promise<Student | null> {
    return this.studentService.findOne(stu_id);
  }
}
