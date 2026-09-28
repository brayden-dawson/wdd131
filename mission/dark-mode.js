
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
    }
}           
                    