const express = require("express");
const router = express.Router();   // ✅ VERY IMPORTANT
const Complaint = require("../models/Complaint");

// =======================
// CREATE complaint
// =======================
router.post("/", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.json({ message: "Saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving" });
  }
});

// =======================
// GET all complaints
// =======================
router.get("/", async (req, res) => {
  try {
    const data = await Complaint.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

// =======================
// UPDATE status
// =======================
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    await Complaint.findByIdAndUpdate(req.params.id, { status });

    res.json({ message: "Status updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating" });
  }
});

module.exports = router;   // ✅ VERY IMPORTANT