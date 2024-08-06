import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { CommentEntity } from 'src/entity/comment.entity';
import { ArticleEntity } from 'src/entity/article.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    UserEntity,
    CommentEntity,
    ArticleEntity,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
