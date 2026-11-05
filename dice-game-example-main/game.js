// 1. click on button
document.querySelector('#rollButton').addEventListener("click", e  =>{

    // 2. animate the dice
    setDieImages("assets/die_rolling.gif");
    // 3. land on a new number
    setTimeout(() => {
        // this function will run after the timeout duration below
        document.querySelectorAll('#gameboard img').forEach(image => {
            const randomNumber = Math.ceil(Math.random() * 6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
        })
        // math.random()
        // 0 - 1, 0.31485293
        // math.floor() rounds down to nearest whole int
        
    }, 1000);
});


function setDieImages(imagePath){
    document.querySelectorAll('#gameboard img').forEach(image =>{
        // change image src to the animated gif
        image.src = imagePath;
    });
};