const fs = require('fs');

fs.writeFile('example.txt', 'Hello, World!',function(err) {
    if(err) console.error(err);
    else console.log("done");
} )