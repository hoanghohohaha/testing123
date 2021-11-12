import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { historianApiController } from 'src/historianApi/historianApi.controller';
import { GtlsSchema } from './gtls.schema';
import { GtlsService } from './gtls.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "gtls", schema: GtlsSchema }])
  ],
  exports: [GtlsService],
  providers: [GtlsService]
})
export class GtlsModule { }
