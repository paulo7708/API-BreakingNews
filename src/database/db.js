const mongoose = require("mongoose");
const serverUrl =
  "mongodb+srv://cybber:raptorv2@cluster0.0moesgo.mongodb.net/?retryWrites=true&w=majority";

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(serverUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
