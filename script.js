alert("hii");

// var arr= [1,2,3,4,"hey",{},true,function(){},[]];    //define array
var arr=[1,2,3,4];
// forEach map filter find indexOf

arr.forEach(function(val){
    console.log(val + " hello");    
})

// arr.length   -- this command is used to find length of array
// arr.push(5);  -- this command is used to add element at last of array
// arr.pop();    -- this command is used to remove last element of array
// arr.shift();  -- this command is used to remove first element of array
// arr.unshift(0); -- this command is used to add element at first of array
// arr.indexOf(3); -- this command is used to find index of an element in array


// mapping

var newarr= arr.map(function(val){
    return 13;                          
})
var newarr= arr.map(function(val){
    return val;
})

console.log(newarr);

// filtering

var ans=arr.filter(function(val){
    if (val>3){ return true;}
    else{ return false;}
})

console.log(ans);

// find
var anss=arr.find(function(val){
    if(val==2) return val;
})
console.log(anss);



// objects

var obj= {
    name: "harsh",
    age :20,                  // key value pairs is known as objects
    city :"delhi"
}
//obj.name
//obj['harsh']       this both commands are same and used to access the values of objects
//obj.age

Object.freeze(obj);     // without this line the value will be changed after the command
obj.age= 22;            // otherwise the value is same 


function abcd(a,b,c){
     // function.length  -- this command is used to find number of arguments in function or length of function
      return 12;
    }

var ansp= abcd();             // function call  --   ansp=12



//asynchronous js
// async js coding

//  var blob= await fetch('https://api.github.com/users');
//  var res = await blob.json();
//  console.log(res);

// line by line code chale isey hi synchronous code kehte hain
// jo bhi code  async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi synchronous(sync) nature ka  hai, jab bhi saara code chal jaye tab check karo async code complete hua ya nhi, agar hua hai to usko side stack se nikal ke main stack mein le aao and chalao

async function abcde(){
     var blob = await fetch('https://api.github.com/users');
        var res = await blob.json();
        console.log(res.results);
}

abcde();