/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Gmls } from './gmls.interface';
import { GmlsDTO } from './dto/gmls.dto';

@Injectable()
export class GmlsService {
  constructor(@InjectModel('gmls') private readonly GmlsModel: Model<Gmls>) { }

  async getAllGmls(): Promise<Gmls[]> {
    const Gmls = await this.GmlsModel.find().exec();
    return Gmls;
  }

  async getGmls(id): Promise<Gmls> {
    const Gmls = await this.GmlsModel.findById(id).exec();
    return Gmls;
  }

  async addGmls(createGmls: GmlsDTO): Promise<Gmls> {
    const newGmls = await new this.GmlsModel(createGmls);
    return newGmls.save();
  }
  // Edit customer details
  async updateGmls(id, createGmls: GmlsDTO): Promise<Gmls> {
    const updatedGmls = await this.GmlsModel.findByIdAndUpdate(
      id,
      createGmls,
      { new: true },
    );
    return updatedGmls;
  }
  // Delete a customer
  async deleteGmls(id): Promise<any> {
    const deletedGmls = await this.GmlsModel.findByIdAndRemove(id);
    return deletedGmls;
  }

}
