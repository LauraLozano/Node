const myObject = {
    myFunction(){
        console.log(this === myObject);
    }
};

myObject.myFunction(); // prints "True"

const myFunction = myObject.myFunction;
myFunction(); // prints "false"