import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
    name: string;
    date: Date;
    email: string;
    movie_id: string;
    text: string;
}
