import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments, CommentsDocument } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comments.name) private commentsModel: Model<CommentsDocument>) {}
  async create(createCommentDto: CreateCommentDto) {
    const comments = await this.commentsModel.create(createCommentDto);
    return comments;
  }

  async findAll() {
    return this.commentsModel.find();
  }

  async findOne(id: string) {
    return this.commentsModel.findById(id);
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comments = await this.commentsModel.findOneAndUpdate({_id: id}, updateCommentDto, {new: true});
    return comments;
  }

  async remove(id: string) {
    const comment = await this.commentsModel.deleteOne({_id: id}).exec();
    return comment
  }
}
