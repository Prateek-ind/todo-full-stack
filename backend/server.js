const app = require("./src/app");
const connectDB = require("./db/connectDB");

const port = 4000

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("server started", port);
    });
  } catch (error) {
    console.error("Server failed to start", error);
  }
};

startServer();
