import dotenv from "dotenv";
import app from "./src/app.js";
import dbConnect from "./db/dbConnect.js";

dotenv.config();
dbConnect();

const PORT = parseInt(process.env.PORT || 3500, 10);
dbConnect()
  .then(() => {
    console.info("Connected to MongoDB");
    app.listen(PORT, () => {
      console.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
