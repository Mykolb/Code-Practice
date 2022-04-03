// working
const btnDiv = document.createElement('div');
let buttons;
let buttonTxt = 0;
let clickButtonFive;


//creating id for div 
btnDiv.setAttribute('id', 'btns');
document.body.append(btnDiv)
btnDiv.style.width = '75%';
btnDiv.style.margin = '0 auto';
//forgot to append to body haha to make visible
console.log(btnDiv)


// creating buttons with text + id's
for (let i = 1; i <= 9; i++) {
    btns = document.createElement('button');
    buttonTxt++;
    btns.innerHTML = buttonTxt;
    btns.id = 'btn' + buttonTxt;
    btns.style.width = '30%';
    btns.style.height = '48px';
    btns.style.fontSize ='24px';

    btnDiv.appendChild(btns);
}

let buttonFive = document.getElementById('btn5')
//create array to for btn nums + ids
let btnNums = [1,2,3,6,9,8,7,4]
const btnID =[1,2,3,6,9,8,7,4];

//when the btn is clicked
buttonFive.addEventListener('click', function() {
    // console.log('test')
    // add number to start of arr + pop of the num at the end
        btnNums.unshift(btnNums.pop())
        //while looping through arr
        for(let i = 0; i <= 7; i++) {
            //btn id text is assigned the value of the btn num from the array
            document.getElementById('btn'+ btnID[i]).innerHTML = btnNums[i];
        }
   
})