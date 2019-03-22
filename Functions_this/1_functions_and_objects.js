var myObject = {
    myFunction: function(){
        console.log(this === myObject); // prints "true"
    }
};

myObject.myFunction();