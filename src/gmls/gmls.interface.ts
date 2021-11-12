import { Document } from 'mongoose';

export interface Gmls extends Document {
  readonly title: string;
  readonly author: string;
  readonly coverImg: string;
  readonly date: string;
  readonly shortDes: string;
  readonly content: string;
}
