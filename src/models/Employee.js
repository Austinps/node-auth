import mongoose from "mongoose";
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

export default model("Employee", employeeSchema);
