    
  import mongoose from "mongoose";
  
  export const connectDB = (uri: string) =>
    mongoose
      .connect(uri, { dbName: "book_management_system" })
      .then((c) => {
        console.log(`Connected with ${c.connection.name}`);
      })
      .catch((e) => console.log(e));
  
  