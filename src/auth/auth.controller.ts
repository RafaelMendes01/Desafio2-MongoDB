import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is_public_decorator';
import { LocalAuthGuard } from './guards/local-auth-guards';
import { authRequest } from './models/auth-request';

@Controller()
export class AuthController {
    constructor( private readonly authservice: AuthService){}


    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req: authRequest){
        const user = req as any;
        const userID = user.user.user._id
        const token =  this.authservice.login(req.user)
        const myToken = token.access_token
        this.authservice.registerSession(userID, myToken)
        return token
    }
}
