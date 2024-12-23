import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { Post } from './post/post.entity';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pass',
      database: 'docker_db',
      autoLoadEntities: true,
      retryAttempts: 5,
      retryDelay: 3000,
      entities: [Post],
      synchronize: true,
    }),
    PostModule,
  ],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
