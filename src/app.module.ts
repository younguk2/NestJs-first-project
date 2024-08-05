import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/Student.entity';

import { StudentService } from './service/student.service';
import { StudentController } from './controller/student.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: '1234',
      database: 'test1',
      entities: [Student],
      synchronize: true, // 개발 환경에서만 사용
    }),
    TypeOrmModule.forFeature([Student]), // 엔티티를 TypeOrmModule에 등록
    UserModule,
  ],
  providers: [StudentService],
  controllers: [StudentController],
})
export class AppModule {}
