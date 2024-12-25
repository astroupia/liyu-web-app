import mongoose, { Schema, mongo, model, models } from "mongoose";

const AdminSchema = new Schema({
  userName: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

export interface IAdmin {
  _id: string;
  userName: string;
  password: string;
}
const Admin = models.Admin || model("Admin", AdminSchema);

export default Admin;
