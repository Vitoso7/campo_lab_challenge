import { IsNotEmpty, IsString } from 'class-validator'

export class CreateOrUpdateProducerDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    phone: string
}
