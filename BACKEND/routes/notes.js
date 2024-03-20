const express = require('express');
const fetchuser = require('../middleware/fetchuser')
const Notes = require('../models/Notes')
const router = express.Router();
const { body, validationResult } = require('express-validator')

// ROUTE 1: fetch all notes using : GET "api/auth/getuser" Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

// ROUTE 2: add notes acc. corresponding to the logged in user: POST "api/auth/addnote" Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;
        const notes = await Notes.create({
            title, description, tag, user: req.user.id
        }
        );
        notes.save();
        res.json(notes);

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error');

    }
})
module.exports = router;