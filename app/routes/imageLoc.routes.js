module.exports = app => {
    const imageLoc = require("../controllers/imageLoc.controller.js");
  
    // Create a new Customer
    app.post("/imageLoc", imageLoc.create);
  
    // Retrieve all imageLoc
    app.get("/imageLoc", imageLoc.findAll);
  
    // Retrieve a single Customer with imageLocId
    app.get("/imageLoc/:imageLocId", imageLoc.findOne);
  
    // Update a Customer with imageLocId
    app.put("/imageLoc/:imageLocId", imageLoc.update);
  
    // Delete a Customer with imageLocId
    app.delete("/imageLoc/:imageLocId", imageLoc.delete);
  
    // Create a new Customer
    app.delete("/imageLoc", imageLoc.deleteAll);
  };