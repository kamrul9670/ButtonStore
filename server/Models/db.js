

      const mongoose =  require('mongoose') ;

      const mongo_url = process.env. MONGO_CONN ;

   

       mongoose.connect(mongo_url , {

 useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000, // Increase timeout
             
       });
       .then(() => {

        console.log(" Database connect suceesfully ... ")
       }).catch((err) => {
        console.log(" Database connection failed ... " , err)
       })
