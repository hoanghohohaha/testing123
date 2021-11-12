import { Document } from 'mongoose';
import { Cates } from './dto/createArticles.dto';

export interface Articles extends Document {
  readonly title: string;
  readonly author: string;
  readonly categories: Cates;
  readonly coverImg: string;
  readonly date: string;
  readonly shortDes: string;
  readonly content: string;
}
