import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FarmModule } from './farm/farm.module';
import { ProducerModule } from './producer/producer.module';

@Module({
  imports: [PrismaModule, FarmModule, ProducerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
