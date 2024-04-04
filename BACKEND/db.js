// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://127.0.0.1:27017/?directConnection=true';

// mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
// const db = mongoose.connection;
// db.on('error',console.error.bind('error connecting to db'));
// db.once('open', () => {
//     console.log('Connected to mongo successfully');
// });
// module.exports = db;

const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Rohit:rohit142001@cluster1.0rgdmtp.mongodb.net/';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;