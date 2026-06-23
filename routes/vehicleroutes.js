const express = require("express");
const router = express.Router();

// Import Vehicle model
const Vehicle = require("../models/Vehicle");

// Add Vehicle
router.post("/", async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);

        const savedVehicle = await vehicle.save();

        res.status(201).json(savedVehicle);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Vehicles
router.get("/", async (req, res) => {
    try {
        const vehicles = await Vehicle.find();

        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get Vehicle By ID
router.get("/:id", async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);

        if (!vehicle) {
            return res.status(404).json({
                message: "Vehicle not found"
            });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Update Vehicle
router.put("/:id", async (req, res) => {
    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Delete Vehicle
router.delete("/:id", async (req, res) => {
    try {
        await Vehicle.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Vehicle deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;
