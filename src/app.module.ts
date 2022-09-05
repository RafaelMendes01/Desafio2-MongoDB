import { Module } from '@nestjs/common';
import { UsersModule } from './Services/Users/users.module';
import { CommentsModule } from './Services/Comments/comments.module';
import { MoviesModule } from './Services/Movies/movies.module';
import { TheatersModule } from './Services/Theaters/theaters.module';
import { SessionsModule } from './Services/Sessions/sessions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Services/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './Services/auth/guards/jwt-guards';

@Module({
  imports: [UsersModule, CommentsModule, MoviesModule, TheatersModule, SessionsModule, MongooseModule.forRoot(process.env.DB), AuthModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
})
export class AppModule {}
