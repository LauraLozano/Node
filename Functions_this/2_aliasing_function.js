var myObject ={
    myFunction: function(){
        console.log(this === myObject); // prints "false"
    }
};

var myFunction = myObject.myFunction;
myFunction();