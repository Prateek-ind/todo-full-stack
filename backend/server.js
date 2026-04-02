const app = require("./src/app");
const connectDB = require("./db/connectDB");

const startServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("server started");
    });
  } catch (error) {
    console.error("Server failed to start", error);
  }
};

startServer();
