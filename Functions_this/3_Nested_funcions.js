var myObject ={
    myFunction: function(){
        console.log(this === myObject); // prints "true"
        setTimeout(function(){
            console.log(this === myObject); // prints "false"
            console.log(this === global); // prints "True"
        }, 0);
    }
};

myObject.myFunction();