import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
    @ApiProperty({
        description: 'nome do usuario que comentou',
        example: 'Rafael Mendes'
    })
    name: string;
    @ApiProperty({
        description: 'data que o comentario foi feito',
        example: '1983-04-27T20:39:15.000+00:00'
    })
    date: Date;
    @ApiProperty({
        description: 'email do usuario que fez o comentario',
        example: 'rafael.mendes@tallos.com.br'
    })
    email: string;
    @ApiProperty({
        description: 'id do filme que recebeu o comentario',
        example: '12312h3j1h21fe2ty2'
    })
    movie_id: string;
    @ApiProperty({
        description: 'texto do comentario do filme',
        example: 'filme muito legal'
    })
    text: string;
}
