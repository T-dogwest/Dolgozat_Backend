import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StationService {
  constructor(readonly db:PrismaService){}

  create(createStationDto: CreateStationDto) {
   return this.db.station.create({data:createStationDto
  });
  }

  async findAll() {
    try{
      const station=await this.db.station.findMany();
      return station;
    }catch{
      throw new NotFoundException('Nem található állomás')
    }
  }

  async findOne(id: number) {
    try{
      const station=await this.db.station.findUnique({
        where: {id},
      });
      return station ? `a keresett állomás ${station.location}`:'az adat nem található.' ;
    }catch{
      throw new NotFoundException(`nem található állomás ${id}`)
    }
  }

  async update(id: number, updateStationDto: UpdateStationDto) {
    try {
      await this.db.station.update({
        where: { id },
        data: updateStationDto,
      });
      return `a ${id} állomás frissítve`; 
    } catch {
      throw new NotFoundException(`nem lehet frissíteni a ${id}`); 
    }
  }

  async remove(id: number) {
    try {
      await this.db.station.delete({
        where: { id },
      });
      return `az ${id} állomás törölve`; 
    } catch {
      throw new NotFoundException(`nem lehet törölni a ${id} állomást`); 
    }
  }
}
