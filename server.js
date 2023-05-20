require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./src/middleware/logEvents");
const notFound = require("./src/middleware/notFound");
const errorHandler = require("./src/middleware/errorHandler");
const verifyJWT = require("./src/middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./src/middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./db/dbConnect");
const PORT = process.env.PORT || 3500;

connectDB();

app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./src/routes/root"));
app.use("/register", require("./src/routes/register"));
app.use("/auth", require("./src/routes/auth"));
app.use("/refresh", require("./src/routes/refresh"));
app.use("/logout", require("./src/routes/logout"));

// app.use(verifyJWT);
app.use("/employees", require("./src/routes/api/employees"));
app.use("/users", require("./src/routes/api/users"));

app.all("*", notFound);
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
