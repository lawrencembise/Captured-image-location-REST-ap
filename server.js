const express = require("express");

const app = express();

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Image Capture Location  application." });
});

require("./app/routes/imageLoc.routes.js")(app);

// set port, listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});