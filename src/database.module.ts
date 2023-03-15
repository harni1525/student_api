import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'admin@123',
      database: 'studentmanagement',
      entities: [__dirname + '/entities/**/*.js'],
      synchronize: false,
    }),
    
  ],
})
export class DatabaseModule {
}

