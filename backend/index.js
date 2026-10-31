if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middlewares/errorHandler");

const holdingRoute = require("./routes/holdingsRoute");
const positionRoute = require("./routes/positionsRoute");
const watchlistRoute = require("./routes/watchlistsRoute");
const orderRoute = require("./routes/ordersRoute");
const authRoute = require("./routes/authRoute");

const app = express();

app.use(bodyParser.json());
app.use(cors(
  {
    origin: ["https://tradesync-mu.vercel.app", "https://tradesync-dashboard.vercel.app"],
    credentials: true,
  }
))   //^to connect dashboard with backend
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT || 3001;
const url = process.env.Mongo_URL;

app.listen(PORT, () => {
    console.log(`app is listening on PORT ${PORT}`);
});

const connectDB = async () => {
  try {
    await mongoose.connect(url);

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1); // Stop the server if the database connection fails
  }
};
connectDB();


app.use("/holdings", holdingRoute);

app.use("/positions", positionRoute);

app.use("/watchlists", watchlistRoute);

app.use("/orders", orderRoute);

app.use("/users", authRoute);


app.use(errorHandler);