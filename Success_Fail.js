

// Success and fail function 

var prompt = require('prompt-sync')();

function succcess(){
    console.log("Congratulations! You passed the test.");
  }
  
  function failed(){
    console.log("Alaas You failed in test.Keep it up"); 
  }
 
  let num = prompt("Enter your marks out of 100.")

  function result(x , succcessfn, failedfn ){
    console.log("Your marks are " + num);
    if(x >= 50 ){
      succcessfn();
    }else {
      failedfn();
    }
  }
  
  result(num , succcess  , failed )


//   myStr = "test string";
//    console.log(myStr.substring(0,3))

//    a = "i am temporary string. i am  a second sentence";
//    console.log(a.length -1);
//    console.log(a[45])
  
 