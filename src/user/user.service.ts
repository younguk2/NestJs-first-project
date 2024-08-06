import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getMainPage() {
    return 'User Main Page';
  }
  async findAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOneById(id: bigint): Promise<UserEntity | null> {
    const result = await this.userRepository.query(
      'SELECT * FROM "user_entity" WHERE id = $1',
      [id.toString()],
    );

    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  }
}
