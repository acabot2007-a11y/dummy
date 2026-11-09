import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({"message" : "Let's go!"})
})

app.listen(3000, () => {
    console.log("App started. Listening on port: 3000");
});