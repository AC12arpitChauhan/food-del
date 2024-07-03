import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://arpitchauhanac07:arpitmahak123@cluster0.nwxr7f8.mongodb.net/food-del"
  ).then(()=>console.log("DB connected"));
};
