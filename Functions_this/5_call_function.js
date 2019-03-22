var myObject = {
    myFunction: function(a, b){
        console.log(a + ' ' + b);// prints "hello world"
        console.log(this === myObject); // prints "false"
        console.log(this === myOtherObject); // prints "true"
    }
};

var myOtherObject = {};
myObject.myFunction.call(myOtherObject, 'hello', 'world');