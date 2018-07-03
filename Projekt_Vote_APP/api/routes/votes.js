const express = require('express');
const router = express.Router();

// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
       message: 'Votes were fetched'
    });
});

router.post('/', (req, res, next) => {
    const vote = {
        songID: req.body.songID,
        number: req.body.number
    };
    res.status(201).json({
        message: 'Vote was created',
        vote: vote
    });
});

router.get('/:voteId', (req, res, next) => {
    res.status(200).json({
        message: 'Vote details',
        voteId: req.params.voteId
    });
});

router.delete('/:voteId', (req, res, next) => {
    res.status(200).json({
        message: 'Vote deleted',
        voteId: req.params.voteId
    });
});

module.exports = router;