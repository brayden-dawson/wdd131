let age = 33;
let name = "Brayden";

console.log(age);
// this is a comment for javascript
/* Multiline
comment*/
age = 34
console.log(age);
const eyecolor = "Blue";

eyecolor = "Green";

//scope is where variables can be referenced
if(age ==34) {
    //We are now in a different scope
    //inside this scope we can reference variables declared outside of this scope
    console.log(name);

    //declare a variable in an inner scope
    let favoritecolor = "Blue"
}

console.log(favoritecolor);

//pull something from the HTML page
document.querySelector("h1").style.color = favoritecolor