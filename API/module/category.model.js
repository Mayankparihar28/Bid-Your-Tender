import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import url from 'url'

var ctSchema = mongoose.Schema({

  _id:Number,
  catnm: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  caticonnm: {
    type: String,
    required: [true,"Category icon is required"],
    trim: true
  }
});

ctSchema.plugin(uniqueValidator);

var ctSchemaModel=mongoose.model('category_collection',ctSchema);

export default ctSchemaModel;