var myFunction = function myOtherFunction(recurse){
    if (recurse){
        myFunction(false); //ok
        myOtherFunction(false); // ok
    }
};

myFunction(true); // ok
myOtherFunction(true); // ReferenceError