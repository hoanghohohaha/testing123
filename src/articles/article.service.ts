import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Articles } from './articles.interface';
import { createArticlesDto } from './dto/createArticles.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('articles') private readonly articleModel: Model<Articles>,
  ) { }

  async getAllArticles(): Promise<Articles[]> {
    const arrArticle = await this.articleModel.find().exec();
    return arrArticle;
  }

  async getArticlesById(articleID): Promise<Articles> {
    const itemArticle = await this.articleModel.findById(articleID).exec();
    return itemArticle;
  }

  async addArticles(createArticle: createArticlesDto): Promise<Articles> {
    const newArticle = await new this.articleModel(createArticle);
    return newArticle.save();
  }

  async getArticlesByCategories(cate: string): Promise<Articles[]> {
    const filteredArticle = await (
      await this.articleModel.find().exec()
    ).filter((article) => article.categories == cate);
    return filteredArticle;
  }
}
