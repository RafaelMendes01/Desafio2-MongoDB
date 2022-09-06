import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import location from '../Interfaces/ILocation';
import { CreateTheaterDto } from './create-theater.dto';

export class UpdateTheaterDto extends PartialType(CreateTheaterDto) {
    @ApiProperty({
        description: 'o id do teatro',
        example: '1000'
    })
    theaterId: number
    @ApiProperty({
        description: 'localização do teatro',
        example: "'address': {'street1': '1207 W Century Ave','street2': '1208 W Century Ave','city': 'Pacatuba', 'State': 'CE', 'zipcode': '13214'}, 'geo': {'type': 'Point', 'coordinates': [-100.81214, 46.829876]}"
    })
    location: location
}
