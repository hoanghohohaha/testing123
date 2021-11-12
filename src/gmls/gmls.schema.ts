import * as mongoose from 'mongoose';

export const GmlsSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImg: String,
  date: String,
  shortDes: String,
  content: String,
})
