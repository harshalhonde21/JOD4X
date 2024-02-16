import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },    
  instructorName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  content: [{
    type: String,
    required: true,
  }]
});

export default mongoose.model("Course", courseSchema);
