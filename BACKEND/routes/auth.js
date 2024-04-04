const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "Rohitisagoodboy"

//create a user using POST request: localhost:3001/api/auth/createuser No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Check whether use with this email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry user with this email already exists." })
        }
        else {
            //  CREATING A USER:
            // const user = User(req.body);
            // user.save()
            // User.create(req.body)
            // .then(user=>res.json(user))
            // .catch(err=> {console.log(err)
            // res.json({error: 'Please enter a unique value for email',message: err.message})})
            // console.log(req.body);
            // res.json(req.body)
            const salt = await bcrypt.genSalt(10);
            success = true;
            const secPwd = await bcrypt.hash(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPwd
            });
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)
            res.json({ success, authtoken })
            // res.json(user)
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});


// authentication of a user using username and password NO login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {email, password}= req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error: "Please login with correct credentials"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please login with correct credentials"})
        }
        //following data is to be sent as a response if email and password matches
        success = true;
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.json({success,authtoken})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")       
    }
}
)

// Fetching a users info Login required
router.post('/getuser', fetchuser ,async (req,res)=>{
    try {
        const userId = req.user.id;
        // console.log(req.user.id, userId)
        const user = await User.findById(userId).select('-password')
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;