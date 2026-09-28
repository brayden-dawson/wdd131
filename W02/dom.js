// select an html element from the DOM
// save it to a local variable called heading
let heading = document.querySelector("h1")

console.log(heading)

heading.style.color = "#FF0000"

heading.style.border = "2px solid black"
//do everything in one line
document.querySelector("p").style.color = "blue"
//there are different ways to select from the DOM
document.getElementById("topics")
//you can select more than one element at a time
console.log(document.querySelectorAll(".list"))
//apply a class to an element
document.querySelector("#topics").classList

topicsclasslist.add("special");

topicsclasslist.toggle("special");


let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                