const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
// INIT
const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
const uri = "mongodb+srv://amazon:KmUCpu5ITtGAIbra@amazon.ffm0u.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected Database Successfully");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});