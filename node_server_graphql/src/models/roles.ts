
import mongoose from "mongoose";


interface IRole {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type IRoleModel = mongoose.Model<IRole> & {};


const schema = new mongoose.Schema({
  created: {
    at: {
      default: Date.now,
      required: true,
      type: Date
    },
    by: {
      required: true,
      type: String
    }
  },
  modified: {
    at: {
      default: Date.now,
      required: true,
      type: Date
    },
    by: {
      required: true,
      type: String
    }
  },
  role: {
    required: true,
    type: String
  },
  access: [
    {
      required: true,
      type: String
    }
  ]
});

export const Role = mongoose.model<IRole, IRoleModel>("roles", schema);
