const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "Registered Successfully" });
});

// Login
router.post("/login", async (req, res) => {
    console.log("BODY:", req.body); // 👈 DEBUG

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Missing email or password" });
    }

    const user = await User.findOne({ email, password });

    console.log("USER:", user); // 👈 DEBUG

    if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }

    res.json({ message: "Login Success", user });
});
module.exports = router;