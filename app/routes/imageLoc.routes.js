module.exports = app => {
    const imageLoc = require("../controllers/imageLoc.controller.js");
  
    // Create a new imageLoc
    app.post("/imageLoc", imageLoc.create);
  
    // Retrieve all imageLoc
    app.get("/imageLoc", imageLoc.findAll);
  
    // Retrieve a single imageLoc with imageLocId
    app.get("/imageLoc/:imageLocId", imageLoc.findOne);
  
    // Update a imageLoc with imageLocId
    app.put("/imageLoc/:imageLocId", imageLoc.update);
  
    // Delete a imageLoc with imageLocId
    app.delete("/imageLoc/:imageLocId", imageLoc.delete);
  
    // Delete all imageLoc
    app.delete("/imageLoc", imageLoc.deleteAll);
  };