import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateOrUpdateProducerDto } from './dto/create-update-producer.dto'

@Injectable()
export class ProducerService {
  constructor (
        private readonly prisma: PrismaService
  ) {}

  async getProducers () {
    const producers = await this.prisma.producer.findMany()

    return producers
  }

  async createProducer (createProducerDto: CreateOrUpdateProducerDto) {
    const emailExists = await this.prisma.producer.findUnique({
      where: { email: createProducerDto.email }
    })

    if (emailExists) {
      throw new HttpException('Email Already in Use', HttpStatus.BAD_REQUEST)
    }

    const createdProducer = this.prisma.producer.create({
      data: {
        phone: createProducerDto.phone,
        name: createProducerDto.name,
        email: createProducerDto.email
      }
    })

    return createdProducer
  }

  async deleteProducer (id: string) {
    const producerExists = await this.prisma.producer.findUnique({
      where: { id: parseInt(id) }
    })

    if (!producerExists) {
      throw new HttpException('Producer does not exist', HttpStatus.BAD_REQUEST)
    }

    await this.prisma.producer.delete({
      where: { id: parseInt(id) }
    })
  }

  async updateProducer (id: string, updateProducer: CreateOrUpdateProducerDto) {
    await this.prisma.producer.update({
      where: { id: parseInt(id) },
      data: {
        name: updateProducer.name,
        email: updateProducer.email,
        phone: updateProducer.phone
      }
    })
  }

  async getProducer (id: string) {
    const producer = this.prisma.producer.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        farms: true
      }
    })

    return producer
  }
}
