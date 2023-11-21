const  fs = require('fs')
const path = require('path')

fs.mkdir('./new', (err)=> {
    if(err) throw err;
    console.log('Directory created')
})