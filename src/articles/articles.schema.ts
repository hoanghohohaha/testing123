import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  categories: String,
  coverImg: String,
  date: String,
  shortDes: String,
  content: String,
})