import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entity/user.entity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/main')
  async getMainPage() {
    return this.userService.findAllUser();
  }

  @Get(':id')
  async getMyArticle(@Param('id') id: string): Promise<UserEntity | null> {
    const userId = BigInt(id); // 문자열을 BigInt로 변환
    return this.userService.findOneById(userId);
  }
}
