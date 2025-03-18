const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/posts", (req, res) => {
  db.query("SELECT * FROM posts ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});


router.post("/posts", (req, res) => {
  const { name, title, content } = req.body;
  if (!name || !title || !content) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const sql = "INSERT INTO posts (name, title, content) VALUES (?, ?, ?)";
  db.query(sql, [name, title, content], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Post added successfully", id: result.insertId });
  });
});


router.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { name, title, content } = req.body;

  if (!name || !title || !content) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "UPDATE posts SET name=?, title=?, content=? WHERE id=?";
  db.query(sql, [name, title, content, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Post not found" });
    res.status(200).json({ message: "Post updated successfully" });
  });
});



router.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM posts WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Post not found" });
    res.status(200).json({ message: "Post deleted successfully" });
  });
});

module.exports = router;
