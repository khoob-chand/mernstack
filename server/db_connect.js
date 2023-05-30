const mongoose=require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/test_db',{
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  
    email: {
      type:String,
      required:true,
    },
    password: {
      type:String,
      required:true,
    },
    cpassword: {
      type:String,
      required:true,
    },
 phone: {
      type:Number,
      required:true,
    }
  
  });
  const schema = mongoose.model("User", UserSchema);
  module.exports=schema;