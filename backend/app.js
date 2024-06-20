import cors from "cors";
import express from "express";
import ProductRoutes from './routers/products.routes.js'

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(ProductRoutes)


export default app;