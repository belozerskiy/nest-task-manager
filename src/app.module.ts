import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { TasksModule } from './api/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { ApiModule } from './api/api.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
    ApiModule,
    GraphqlModule,
  ],
})
export class AppModule {}
