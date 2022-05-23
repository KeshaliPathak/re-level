const calculator = (num1, num2, operation) =>{
    if (operation === "add") return num1 + num2;
    if (operation === "sub") return num1 - num2;

    return "operator not defined";
};


console.log("add", calculator(2, 1, "add"));
console.log("sub",calculator(2, 1, "sub"));