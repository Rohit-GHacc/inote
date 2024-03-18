const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const { body, validationResult }= require('express-validator')
router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password').isLength({min:5})
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const user = User(req.body);
    user.save()
    // User.create(req.body)
    // .then(user=>res.json(user))
    .catch(err=> {console.log(err)
    res.json({error: 'Please enter a unique value for email',message: err.message})})
    console.log(req.body);
    // res.json(req.body)
});

module.exports = router;