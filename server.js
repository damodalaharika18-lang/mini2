const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/VehicleServiceDB")
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err);
});

// Connection events
mongoose.connection.on("connected", () => {
    console.log("MongoDB connection established");
});

mongoose.connection.on("error", (err) => {
    console.log("MongoDB error:", err);
});

// Import routes
const vehicleRoutes = require("./routes/vehicleroutes");

app.use("/api/vehicles", vehicleRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Vehicle Service Management API Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});