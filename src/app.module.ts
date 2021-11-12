/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GmlsModule } from './gmls/gmls.module';
import { NvtdModule } from './nvtd/nvtd.module';
import { GtlsModule } from './gtls/gtls.module';
import { ArticlesModule } from './articles/articles.module';
import { historianApiController } from './historianApi/historianApi.controller';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://hoang:123456!@cluster0.7vrfc.mongodb.net/Gmls?retryWrites=true&w=majority", { useNewUrlParser: true }),
    GmlsModule,
    NvtdModule,
    GtlsModule,
    ArticlesModule,
  ],
  controllers: [AppController, historianApiController],
  providers: [AppService],
})
export class AppModule { }
