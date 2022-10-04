import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { encodePassword } from './security/bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password)
    const newUser = { ...createUserDto, password}
    const user = await this.userModel.create(newUser);
    return user
  }

  async findAll() {
    return this.userModel.find();
  }

  async findAndPaginate(limit: number, skip: number){
    const skipValue = limit * (skip - 1)
    return this.userModel.find().limit(limit).skip(skipValue);
  }

  async findAndCount(){
    return this.userModel.find().count()
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }
  async findOneByEmail(email: string) {
    return this.userModel.findOne({email});
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const password = encodePassword(updateUserDto.password)
    const NewUser = { ...updateUserDto, password}
    const user = await this.userModel.findOneAndUpdate({_id: id}, NewUser, {new: true});
    return user;
  }

 async remove(id: string) {
    const user = await this.userModel.deleteOne({_id: id}).exec();
    return user;
  }
}
