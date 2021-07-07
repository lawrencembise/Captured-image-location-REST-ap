const ImageLoc = require("../models/imageLoc.model.js");

// Create and Save a new ImageLoc
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a ImageLoc
    const imageLoc = new ImageLoc({
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      imageUrl: req.body.imageUrl
    });
  
    // Save ImageLoc in the database
    ImageLoc.create(imageLoc, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the ImageLoc."
        });
      else res.send(data);
    });
  };

// Retrieve all imageLocs from the database.
exports.findAll = (req, res) => {
    ImageLoc.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving imageLocs."
        });
      else res.send(data);
    });
  };
// Find a single ImageLoc with a imageLocId
exports.findOne = (req, res) => {
    ImageLoc.findById(req.params.imageLocId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ImageLoc with id ${req.params.imageLocId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving ImageLoc with id " + req.params.imageLocId
          });
        }
      } else res.send(data);
    });
  };

// Update a ImageLoc identified by the imageLocId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    ImageLoc.updateById(
      req.params.imageLocId,
      new ImageLoc(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found ImageLoc with id ${req.params.imageLocId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating ImageLoc with id " + req.params.imageLocId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a ImageLoc with the specified imageLocId in the request
exports.delete = (req, res) => {
    ImageLoc.remove(req.params.imageLocId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found ImageLoc with id ${req.params.imageLocId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete ImageLoc with id " + req.params.imageLocId
          });
        }
      } else res.send({ message: `ImageLoc was deleted successfully!` });
    });
  };

// Delete all imageLocs from the database.
exports.deleteAll = (req, res) => {
    ImageLoc.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all imageLocs."
        });
      else res.send({ message: `All imageLocs were deleted successfully!` });
    });
  };