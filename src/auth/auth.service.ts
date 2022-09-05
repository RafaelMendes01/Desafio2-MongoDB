import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/Services/Users/entities/user.entity';
import { UsersService } from 'src/Services/Users/users.service';
import { UserPayload } from './models/user-payload';
import { UserToken } from './models/user-token';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Sessions, SessionsDocument } from 'src/Services/Sessions/entities/session.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserService: UsersService,
    private readonly jwtService: JwtService,
    @InjectModel(Sessions.name) private sessionModel: Model<SessionsDocument>
  ) { }
  login(user: User): UserToken {
    const payload: UserPayload = {
      email: user.email,
      name: user.name

    };
    const jwtToken = this.jwtService.sign(user);

    return {
      access_token: jwtToken,
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.UserService.findOneByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          user
        };
      }
    }

    throw new Error(
      'email ou senha incorretas.',
    );
  }

  async registerSession(id: string, jwt: string) {
    const MySession = {
      user_id: id,
      jwt: jwt
    }
    if(MySession.user_id == id){
      this.sessionModel.deleteOne({user_id: MySession.user_id}).exec();
    }
    this.sessionModel.create(MySession)
  }
}
