import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { StationModule } from './station/station.module';

@Module({
  imports: [StationModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
