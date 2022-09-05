import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UserPayload } from "../models/user-payload";
import { UserFromJwt } from "../models/UserFromJwt";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: UserPayload): Promise<UserFromJwt> {
    return {
      email: payload.email,
      name: payload.name,
    };
  }
}