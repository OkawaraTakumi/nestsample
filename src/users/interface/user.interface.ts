import * as mongoose from 'mongoose';
//Modelの型はmongoose.Documentを継承している必要がある
export interface User extends mongoose.Document {
  username: string;
  password: string;
}
