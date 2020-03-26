const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   console.log(req.body);
  //   console.log(req.params);
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addnote: function(req, res) {
    if (req.body.todo === "save") {
      db.Book
        .findOneAndUpdate({ _id: req.params.id }, {$push: {"notes":{body:req.body.body}}, new: true})
        .then(dbModel => {res.json(dbModel)})
        .catch(err => res.status(422).json(err));  
    }
    else{
        db.Book
        .findOneAndUpdate({ _id: req.params.id }, {$pull: {"notes":{_id:(req.body.noteID)}}})
        .then(dbModel => {res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    }
    
  }

};
// newData = User.updateOne({"_id": user[0]._id}, {$push: {"items":{name:req.body.name,quantity:req.body.quantity}}, new: true})
// return newData
