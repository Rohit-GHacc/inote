const connectToMongo = require('./db');
const express = require('express')
connectToMongo();
const app = express();
const cors = require('cors')
const port = 3001;
app.use(express.json())
app.use(cors({
    origin: [],
    methods: ['POST','GET','PUT','DELETE'],
    credentials: true
}));
app.get('/', (req,res)=>{
     res.send('Hello world');
})
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})