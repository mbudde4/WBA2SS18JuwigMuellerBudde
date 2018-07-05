const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Song = require('../models/song.js');

router.get('/',(req, res, next) =>{
    Song.find()
        .exec()
        .then(docs => {
            console.log(docs);
            //if(docs.lenght >= 0) {
                res.status(200).json(docs);
            //}else{
            //      res.status(404).json({
            //      message: 'No entries found'
            //  });
            //}
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/',(req, res, next) =>{
    const song = new Song({
       _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    song
        .save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST requests to /songs',
            createdSong: result
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});

router.get('/:songId', (req, res, next) => {
   const id = req.params.songId;
   Song.findById(id)
       .exec()
       .then(doc => {
           console.log("From database", doc);
           if(doc) {
               res.status(200) .json(doc);
           }else {
               res.status(404).json({message: 'No valid entry found for provided ID'});
           }

       })
       .catch(err => {
           console.log(err);
           res.status(500).json({error:err});
       });
});

router.patch('/:songId', (req, res, next) => {
    const id = req.params.songId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Song.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.delete('/:songId', (req, res, next) => {
    const id = req.params.songId;
   Song.remove({_id: id })
       .exec()
       .then(result => {
           res.status(200).json(result);
       })
       .catch(err => {
           console.log(err);
           res.status(500).json({
               error: err
           });
       });
});

module.exports = router;