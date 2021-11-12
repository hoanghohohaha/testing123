import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Gtls } from './gtls.interface';
import { createGtlsDto } from './dto/gtls.dto';

@Injectable()
export class GtlsService {
  constructor(@InjectModel('gtls') private readonly GtlsModel: Model<Gtls>) { }

  async getAllGtls(): Promise<Gtls[]> {
    const arrGtls = await this.GtlsModel.find().exec();
    return arrGtls;
  }

  async getGtlsById(GtlsID): Promise<Gtls> {
    const itemGtls = await this.GtlsModel.findById(GtlsID).exec();
    return itemGtls;
  }

  async addGtls(createGtls: createGtlsDto): Promise<Gtls> {
    const newGtls = await new this.GtlsModel(createGtls);
    return newGtls.save();
  }
}