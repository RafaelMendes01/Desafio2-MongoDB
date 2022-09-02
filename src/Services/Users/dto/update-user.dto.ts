import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: 'nome do usuario',
        example: 'john doe'
    })
    name: string
    @ApiProperty({
        description: 'email do usuario',
        example: 'teste@example.com'
    })
    email: string
    @ApiProperty({
        description: 'senha do usuario',
        example: 'senha123'
    })
    password: string
}
