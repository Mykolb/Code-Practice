//working
let button = document.getElementById('btn')
let countClicks = 0;

button.innerHTML = 0;

button.addEventListener('click', function() {
    countClicks++
    // console.log(countClicks)
    button.innerHTML = countClicks;
})