import { Document } from 'mongoose';

export interface Gtls extends Document {
  readonly title: string;
  readonly author: string;
  readonly coverImg: string;
  readonly date: string;
  readonly shortDes: string;
  readonly content: string;
}
