import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'
import { CreateOrUpdateProducerDto } from './dto/create-update-producer.dto'
import { ProducerService } from './producer.service'

@Controller('producer')
export class ProducerController {
  constructor (
      private producerService: ProducerService
  ) {}

  @Get()
  getProducers () {
    return this.producerService.getProducers()
  }

  @Post()
  createProducer (@Body() createProducerDto: CreateOrUpdateProducerDto) {
    return this.producerService.createProducer(createProducerDto)
  }

  @Delete(':id')
  @HttpCode(202)
  deleteProducer (@Param('id') id: string) {
    return this.producerService.deleteProducer(id)
  }

  @Put(':id')
  updateProducer (
    @Param('id') id: string,
    @Body() updateProducer: CreateOrUpdateProducerDto
  ) {
    return this.producerService.updateProducer(id, updateProducer)
  }

  @Get('farms/:id')
  getProducer (@Param('id') id: string) {
    return this.producerService.getProducer(id)
  }
}
