const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Handling GET requests to /songs'
    });
});

router.post('/',(req, res, next) =>{
    const song = {
        name: req.body.name
    };
    res.status(201).json({
        message: 'Handling POST requests to /songs',
        createdSong: song
    });
});

router.get('/:songId', (req, res, next) => {
   const id = req.params.songId;
   if(id === 'special') {
       res.status(200).json({
           message: 'You discovered the special ID',
           id: id
       });
   }else {
       res.status(200).json({
            message: 'You pass an ID'
       });
   }
});

router.patch('/:songId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated song!'
    });
});

router.delete('/:songId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted song!'
    });
});

module.exports = router;