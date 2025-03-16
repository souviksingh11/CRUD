const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userroutes");


require("dotenv").config();

const app = express();
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
 
));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log("MongoDB Connected"))
   .catch(err => console.log(err));

   app.use("/api", userRoutes);



app.listen(process.env.PORT, () => console.log("Server running on port 8000"));











