const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

app.get("/", (req, res) => {
res.status(200).json({
app: "SK SONG AI",
status: "online",
message: "SK SONG AI backend yana aiki."
});
});

app.get("/api/health", (req, res) => {
res.status(200).json({
success: true,
message: "Backend yana aiki."
});
});

app.post("/api/generate", async (req, res) => {
const prompt = req.body?.prompt;

if (typeof prompt !== "string" || !prompt.trim()) {
return res.status(400).json({
success: false,
message: "Ka rubuta prompt na wakar da kake so."
});
}

return res.status(501).json({
success: false,
message: "Ba a haɗa sabis ɗin AI Music da zai samar da waƙa mai sauti ba tukuna."
});
});

app.use((req, res) => {
res.status(404).json({
success: false,
message: "Ba a sami wannan hanyar ba."
});
});

app.listen(PORT, "0.0.0.0", () => {
console.log("SK SONG AI backend yana aiki a port ${PORT}");
});
