import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const dbInfo: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 43306,
  username: 'root',
  password: 'test',
  database: 'bbacks',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export default dbInfo;
