
const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const PostSchema = new Schema({
  title:String,
  summary:String,
  content:String,
  cover:String,
  author:{type:Schema.Types.ObjectId, ref:'User'}, //It references the "_id" field of the User model and uses the "ref" option to specify the referenced model as "User".
}, {
  timestamps: true,
});
//The timestamps option is set to true in the schema. This automatically adds "createdAt" and "updatedAt" fields to the Post documents,
// which store the creation and modification timestamps respectively.
const PostModel = model('Post', PostSchema);

module.exports = PostModel;