const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const financialRecordRouter = require("./routes/financial-records");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors(
    {
        origin: "https://budget-buddy-coral.vercel.app",
        methods: ["POST", "GET", "PUT", "DELETE"],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
));
app.use("/financial-records", financialRecordRouter);

const MONGO_URI = "mongodb+srv://tusharchhabra658:SJGyGqPpVl6x5JYF@budgetbuddydb.1w5ug.mongodb.net/";

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Server connected to databse"))
    .catch((err) => console.error("Failed to connect to database", err))