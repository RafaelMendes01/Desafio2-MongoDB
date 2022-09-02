import { ApiProperty } from "@nestjs/swagger"
import location from "../Interfaces/ILocation"

export class CreateTheaterDto {
    @ApiProperty({
        description: 'o id do teatro',
        example: '1000'
    })
    theaterId: number
    @ApiProperty({
        description: 'localização do teatro',
        example: 'rua tal cidade tal'
    })
    location: location
}
