if(process.env.NODE_ENV){
    
    module.exports = require('./production')
}
else{
    module.exports = require('./dev')
}