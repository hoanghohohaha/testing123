import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GmlsSchema } from './gmls.schema';
import { GmlsService } from './gmls.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'gmls', schema: GmlsSchema }])
  ],
  exports: [GmlsService],
  providers: [GmlsService]
})
export class GmlsModule { }
