import { Schema , Document } from "mongoose";


export interface IUser extends Document
{
  name : string,
  password : string,
  email : string,
  tag : number,
  avatar : string,
  cover : string, 
  servers : string[],
  friends : string[],
  friendsToAccept : string[],
  friendsPending : string[],
}


export const UserSchema = new Schema<IUser>(
  {
    name :
    {
      type : String,
      required : true,
    },
    tag : 
    {
      type : Number,
      default : Math.floor( Math.random() * (9999) ) + 1000
    },
    password : 
    {
      type : String,
      required : true
    },
    email :
    {
      type : String,
      required : true, 
      unique : true
    },
    avatar : 
    {
      type : String,
      default : ""
    },
    friends :
    [
      {
        type : Schema.Types.ObjectId,
        ref : "users"
      }
    ],
    servers :
    [
      {
        type : Schema.Types.ObjectId,
        ref : "servers"
      }
    ],
    friendsToAccept :
    [
      {
        type : Schema.Types.ObjectId,
        ref : "users"
      }
    ],
    friendsPending :
    [
      {
        type : Schema.Types.ObjectId,
        ref : "users"
      }
    ],
    cover : 
    {
      type : String,
      default : ""
    }
  },
  {
    timestamps : true,
    versionKey : false
  }
)

