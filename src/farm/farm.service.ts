import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateFarmDto } from './dto/create-farm.dto'

@Injectable()
export class FarmService {
  constructor (
        private readonly prisma: PrismaService
  ) {}

  async createFarm (createFarm: CreateFarmDto, producerId: string) {
    const createdFarm = await this.prisma.farm.create({
      data: {
        nameFarm: createFarm.nameFarm,
        producerId: parseInt(producerId)
      }
    })

    return createdFarm
  }
}
