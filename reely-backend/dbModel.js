import mongoose from "mongoose";

//creating schema
const reelySchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: Number,
  messages: String,
  description: String,
  shares: Number,
});
//Collection inside the database

export default mongoose.model("reelyVideos", reelySchema);
