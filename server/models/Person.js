
import mongoose from 'mongoose';
// import rawData form './fixture/raw-data';
 
const Person = mongoose.model('Person', {
  name: String,
  image:String
});

export default Person;