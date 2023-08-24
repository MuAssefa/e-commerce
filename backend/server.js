import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5000;
connectDB();

const app = express();

// body parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cookie parser middleware

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// const __dirname = path.resolve();


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
