import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);

    let connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected to database successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongodb connection error, Please make sure mongodb is running. ",
        err
      );
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
