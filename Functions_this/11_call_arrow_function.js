const myObject = {};

const myFunction = () => {
    console.log(this === myObject);
};

myFunction(); // prints "false"
myFunction.call(myObject); // prints "false"