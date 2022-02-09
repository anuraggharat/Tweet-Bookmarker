import mongoose  from "mongoose";

const con ={}


export default async function dbConnect(){

    if (con.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    con.isConnected = db.connections[0].readyState;
    
}