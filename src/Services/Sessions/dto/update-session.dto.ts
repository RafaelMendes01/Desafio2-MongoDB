import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSessionDto } from './create-session.dto';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {
    @ApiProperty({
        description: 'id do usuario da sessão',
        example: '59b99dcfcfa9a34dcd7885ed'
    })
    user_id: string;
    @ApiProperty({
        description: 'token da sessão',
        example: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTk5MDkzMjEsIm5iZiI6MTUxOTkwOTMyMSwianRpIjoiNmJlZDAwMWYtNTFiYi00NzVhLTgxZDAtMDcwNGE5Mjk0MWZlIiwiZXhwIjoxNTE5OTEwMjIxLCJpZGVudGl0eSI6eyJlbWFpbCI6InQzcXVsZmVlbUBrd2l2NS42dXIiLCJuYW1lIjoiM2lveHJtZnF4IiwicGFzc3dvcmQiOm51bGx9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJ1c2VyIjp7ImVtYWlsIjoidDNxdWxmZWVtQGt3aXY1LjZ1ciIsIm5hbWUiOiIzaW94cm1mcXgiLCJwYXNzd29yZCI6bnVsbH19fQ.ejtr_NyZyBronWMKuE0RFTjWej--T0zGrdc_iymGtVs'
    })
    jwt: string;
}
