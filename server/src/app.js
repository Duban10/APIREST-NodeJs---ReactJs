import express from "express";
// const express = require("express");

import productRoutes from "./routes/product.route.js";

// app.use(express.json());
const app = express();

app.use(express.json()); // para poder saber lo que estoy recibiendo en el request

app.use("/api", productRoutes);

// module.exports = app;
export default app;