const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Create User
router.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({
            message: "User created successfully",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
});

router.get("/users", async (req, res) => {
    try {
        const user = await User.find({});

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "User fetched successfully",
            user
        });
        
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
});




// Read Users
router.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "User fetched successfully",
            user
        });
        
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
});


// Update User
router.put("/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(updatedUser); // Return the updated user data
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
});
// Delete User
// Assuming you're using Express.js
router.delete("/users/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
        
    } catch (error) {
        
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }

});



module.exports = router;
