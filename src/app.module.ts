import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/Student.entity';

import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { UserModule } from './user/user.module';
import { UserEntity } from './entity/user.entity';
import { CommentEntity } from './entity/comment.entity';
import { ArticleEntity } from './entity/article.entity';
import * as path from 'path';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: '1234',
      database: 'test1',
      entities: [path.join(__dirname, './entity/**/*.entity.{js, ts}')],
      synchronize: true,
    }),
    StudentModule,
    UserModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
