import { IsNotEmpty, IsString } from 'class-validator'

export class CreateFarmDto {
    @IsString()
    @IsNotEmpty()
    nameFarm: string
}
