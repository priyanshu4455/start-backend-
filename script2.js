const fs = require('fs');

//writefile 
//appendfile 
//copyfile
//rename 
//unlink 

// fs.writefile(File,data[, options], callback)
fs.writeFile('example.txt', 'Hello, World!',function(err) {
    if(err) console.error(err);
    else console.log("done");
} )

fs.appendfileFile('example.txt', 'Hello, World! kaise ho',function(err) {
    if(err) console.error(err);
    else console.log("done");
} )


fs.rename('example.txt', 'example2.txt', function (err) {
    if (err) console.error(err);
    else console.log("renamed");
});

fs.copyFile('example2.txt', 'example3.txt', function (err) {
    if (err) console.error(err);
    else console.log("copied");
});

fs.unlink('example3.txt', function (err) {
    if (err) console.error(err);
    else console.log("deleted/removed");
});

fs.rmdir('myfolder',{recursive:true}, function (err) {
    if (err) console.error(err);
    else console.log("folder deleted"); 
});

// or 

fs.rm('myfolder',{recursive:true}, function (err) {
    if (err) console.error(err);
    else console.log("folder deleted"); 
});


// http and https
// protocol - rules
/* internet par kuch bhi karne ke liye rules banaye gaye hai unke dwara jinhone internet banayaa hai
, abb  unn rules ko follow karna jaruri hai , aur ye rules follow ho isliye app ke operating system 
mein pre installed aate hai */

/* http - protocol
yahi protocol hai ya rule hai jisko follow kare bina aap internet pe na hi kuch vej sakte ho na ,
na hi kuch manga sakte ho*/

const http = require('http');

const server= http.createServer(function(req, res) {
    res.write('Hello World!');
    res.end();
})
server.listen(3000);
