import mongoose, { model, Schema, Document } from "mongoose";

interface data {
  email: string;
  fullName: string;
  stack: string;
  password: string;
}

interface Idata extends data, mongoose.Document {}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter an email"],
      lowercase: true,
      trim: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, "Please Enter your full name"],
    },
    stack: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Please enter a email"],
      min: [6, "Please enter at least 6 characters"],
    },
  },
  { timestamps: true }
);

const UserModel = model<Idata>("USERS", UserSchema);

export default UserModel;
