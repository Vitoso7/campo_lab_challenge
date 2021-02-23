import { Body, Controller, Param, Post } from '@nestjs/common'
import { CreateFarmDto } from './dto/create-farm.dto'
import { FarmService } from './farm.service'

@Controller('farm')
export class FarmController {
  constructor (private farmService: FarmService) {}

  @Post('producer/:producerId')
  createProducer (@Body() createFarmDto: CreateFarmDto, @Param('producerId') producerId: string) {
    return this.farmService.createFarm(createFarmDto, producerId)
  }
}
