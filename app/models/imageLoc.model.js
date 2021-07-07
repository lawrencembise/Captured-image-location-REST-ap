const sql = require("./db.js");

// constructor
const ImageLoc = function(ImageLoc) {
  this.latitude = ImageLoc.latitude;
  this.longitude = ImageLoc.longitude;
  this.imageUrl = ImageLoc.imageUrl;
};

ImageLoc.create = (newImageLoc, result) => {
  sql.query("INSERT INTO ImageLocs SET ?", newImageLoc, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created ImageLoc: ", { id: res.insertId, ...newImageLoc });
    result(null, { id: res.insertId, ...newImageLoc });
  });
};

ImageLoc.findById = (ImageLocId, result) => {
  sql.query(`SELECT * FROM ImageLocs WHERE id = ${ImageLocId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found ImageLoc: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found ImageLoc with the id
    result({ kind: "not_found" }, null);
  });
};

ImageLoc.getAll = result => {
  sql.query("SELECT * FROM ImageLocs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("ImageLocs: ", res);
    result(null, res);
  });
};

ImageLoc.updateById = (id, ImageLoc, result) => {
  sql.query(
    "UPDATE ImageLocs SET latitude = ?, longitude = ?, imageUrl = ? WHERE id = ?",
    [ImageLoc.latitude, ImageLoc.longitude, ImageLoc.imageUrl, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found ImageLoc with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated ImageLoc: ", { id: id, ...ImageLoc });
      result(null, { id: id, ...ImageLoc });
    }
  );
};

ImageLoc.remove = (id, result) => {
  sql.query("DELETE FROM ImageLocs WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found ImageLoc with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted ImageLoc with id: ", id);
    result(null, res);
  });
};

ImageLoc.removeAll = result => {
  sql.query("DELETE FROM ImageLocs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} ImageLocs`);
    result(null, res);
  });
};

module.exports = ImageLoc;