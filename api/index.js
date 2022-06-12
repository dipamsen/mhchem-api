const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mhchem = require("mhchemparser");

const app = express();

// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  const tex = req.query.tex;
  const result = mhchem.mhchemParser.toTex(tex, "tex");
  res.type("text").send(result);
});

app.post("/api", (req, res) => {
  const tex = req.body.tex;
  const result = mhchem.mhchemParser.toTex(tex, "tex");
  res.type("text").send(result);
});

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server started on port 3000");
// });

module.exports = app;
