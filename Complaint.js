const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  title: String,
  issue: String,
  status: { 
    type: String, 
    enum: ["Pending", "Approved", "Rejected"], 
    default: "Pending" 
  }
}, { timestamps: true });

module.exports = mongoose.model("Complaint", ComplaintSchema);