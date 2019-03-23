class myClass{
    myFunction = () => {
        console.log(this instanceof myClass); // prints "true"
    };
}

const myInstace = new myClass();
const myFunction = myInstace.myFunctioin;
myFunctioin();