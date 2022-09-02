import { PartialType } from '@nestjs/mapped-types';
import location from '../Interfaces/ILocation';
import { CreateTheaterDto } from './create-theater.dto';

export class UpdateTheaterDto extends PartialType(CreateTheaterDto) {
    theaterId: number
    location: location
}
