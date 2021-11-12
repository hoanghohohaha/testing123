import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from './article.service';
import { ArticleSchema } from './articles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'articles', schema: ArticleSchema }]),
  ],
  exports: [ArticleService],
  providers: [ArticleService],
})
export class ArticlesModule { }
