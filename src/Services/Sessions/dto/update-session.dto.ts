import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionDto } from './create-session.dto';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {
    user_id: string;
    jwt: string;
}
