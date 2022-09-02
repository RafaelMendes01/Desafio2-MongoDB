import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Sessions, SessionsDocument } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(@InjectModel(Sessions.name) private sessionModel: Model<SessionsDocument>) {}
  async create(createSessionDto: CreateSessionDto) {
    const sessions = await this.sessionModel.create(createSessionDto);
    return sessions;
  }

  async findAll() {
    return this.sessionModel.find();
  }

  async findOne(id: string) {
    return this.sessionModel.findById(id);
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    const sessions = await this.sessionModel.updateOne({_id: id}, updateSessionDto, {new: true});
    return sessions;
  }

  async remove(id: string) {
    const sessions = await this.sessionModel.deleteOne({_id: id}).exec();
    return sessions
  }
}
