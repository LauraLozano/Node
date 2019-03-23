const myObject = {
    myFunction(){
        console.log(this === myObject); // prints "true"
        setTimeout(() => {
            console.log(this === myObject); // prints "true"
            console.log(this === global); // prints "false "
        }, 0);
    }
};

myObject.myFunction();