import express from "express";

const app = express();
app.use(express.json());

app.post("/get-user-context", (req, res) => {
  const { user_id } = req.body;

  console.log("User:", user_id);

  res.json({
    name: "Guest",
    personality: "confident, playful",
    preferences: ["engaging", "bold"],
    conversation_history: "User enjoys fun conversations"
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
