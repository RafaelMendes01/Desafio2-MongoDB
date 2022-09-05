import { Request } from "express";
import { User } from "src/Services/Users/entities/user.entity";
export interface authRequest extends Request{
    user: User;
}