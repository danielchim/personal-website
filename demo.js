const target = "A (B), C (D), E (F)";
// split the string first
const splitted = target.split(",");
console.log(splitted)
let normalChar = "";
let processedChar = "";
// now seperate the ones with brackets
splitted.forEach((index) => {
    // if string contains (, split it and store the text
    if(index.includes("(")){
        processedChar += index.replace(/[^\w\s]/gm,"") + " ";
        console.log(processedChar);
    }else{
        normalChar += index + " ";
        console.log(normalChar);
    }
});

// finally encode it to a JSON
const result = {
    normalChar,
    processedChar
}

JSON.stringify(result);

console.log(result);
