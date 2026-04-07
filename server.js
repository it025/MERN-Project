const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ SERVE FRONTEND
app.use(express.static("public"));

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/complaint")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Admin login
app.post("/admin-login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/complaints", require("./routes/complaintRoutes"));

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});