import { Module } from '@nestjs/common';
import { UsersModule } from './Services/Users/users.module';
import { CommentsModule } from './Services/Comments/comments.module';
import { MoviesModule } from './Services/Movies/movies.module';
import { TheatersModule } from './Services/Theaters/theaters.module';
import { SessionsModule } from './Services/Sessions/sessions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CommentsModule, MoviesModule, TheatersModule, SessionsModule, MongooseModule.forRoot(process.env.DB)],
  controllers: [],
  providers: [],
})
export class AppModule {}
