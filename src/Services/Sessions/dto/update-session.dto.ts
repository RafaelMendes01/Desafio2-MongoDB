import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSessionDto } from './create-session.dto';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {
    @ApiProperty({
        description: 'id do usuario da sessão',
        example: '123213asdasdasdas'
    })
    user_id: string;
    @ApiProperty({
        description: 'token da sessão',
        example: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTk5MDkzMjEsIm5iZiI6M'
    })
    jwt: string;
}
