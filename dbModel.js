import mongoose from "mongoose";

//creating schema
const reelySchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});
//Collection inside the database

export default mongoose.model("reelyVideos", reelySchema);
