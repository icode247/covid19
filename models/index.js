const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/covid-19",{
    useUnifiedTopology: true,
   useNewUrlParser: true,
   useFindAndModify: true,
   useCreateIndex: true
});

var con = mongoose.connection;
con.on("error", console.log.bind(console, "error occured while connecting to db"));
con.once("open",()=>{
    console.log("db connected!")
})