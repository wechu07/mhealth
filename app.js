const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ejsMate = require("ejs-mate");
const morgan = require("morgan");
const methodOverride = require("method-override");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const flash = require("connect-flash");
const navigationRoutes = require("./src/routes/homeRoutes");
const connectDatabase = require("./config/connectDatabase");

// loading the envariables
dotenv.config();

// connectDatabase();

const app = express();

// HTTP request logger middleware by morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(express.json());
app.use(cors());
app.use(flash());
app.use(helmet.contentSecurityPolicy())
app.use(mongoSanitize());

app.use("/", navigationRoutes);

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Listening on 0.0.0.0:${port}`);
});
