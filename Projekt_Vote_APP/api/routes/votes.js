const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
       message: 'Votes were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Vote was created'
    });
});

router.post('/:voteId', (req, res, next) => {
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