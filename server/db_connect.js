const mongoose=require('mongoose');
const Db="mongodb+srv://khoobchandjhariya48:khoob@cluster0.dqzahfd.mongodb.net/?retryWrites=true&w=majority";
    // mongoose.connect('mongodb://127.0.0.1:27017/test_db',{
    //     useNewUrlParser: true,
    //     // useFindAndModify: false,
    //     useUnifiedTopology: true
    // });
    mongoose.connect(Db,{ useNewUrlParser: true,
          // useFindAndModify: false,
          useUnifiedTopology: true}).then(()=>{
      console.log("Connected successfully khoob");
    }).catch((err)=>{
      console.log(err)});
    
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {

// });
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