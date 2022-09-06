import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/Services/Users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginValidationMiddleware } from './middlewares/login-validation-middleware';
import { JwtStrategy } from 'src/Services/auth/strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local-strategy';
import { Sessions, SessionsSchema } from 'src/Services/Sessions/entities/session.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '8h'}
  }),
  MongooseModule.forFeature([{ name: Sessions.name, schema: SessionsSchema }])
],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginValidationMiddleware).forRoutes('login');
  }
}
