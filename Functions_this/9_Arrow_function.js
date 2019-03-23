const myFunction = () => {
    console.log(this === global); // prints "true"
};

myFunction();