//grabbing the btns
const btnAdd = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');
const btnEql = document.querySelector('#btnEql');
const btnClr = document.querySelector('#btnClr');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const result = document.querySelector('#res');

const clickBtn = e => {
    let btn = e.target;
    let selectedBtn = document.getElementById(btn.id).innerHTML;
    // console.log(selectedBtn)

    if(btn0 || btn1 || btnAdd || btnSub || btnDiv || btnMul) {
        result.innerHTML = result.innerHTML + selectedBtn
    } 
    

}

btn0.addEventListener('click', clickBtn, false)
btn1.addEventListener('click', clickBtn, false)
btnAdd.addEventListener('click', clickBtn, false)
btnSub.addEventListener('click', clickBtn, false)
btnMul.addEventListener('click', clickBtn, false)
btnDiv.addEventListener('click', clickBtn, false)

//clear the res container
btnClr.addEventListener('click', function() {
   result.innerHTML = '';
})


// const countIt = (num1, num2) => {
//     // let operatorBtn = e.target;
//     // console.log(operatorBtn)

//     if(btnAdd && btnEql) {
//         return num1 + num2 
//     } else if (btnSub && btnEql) {
//         return num1 - num2
//     } else if (btnMul ) {
//         return num1 * num2
//     } else {
//        return num1/num2
//     }
    
// }
// countIt()


// case 'btnEql':
            // let c = res.textContent.split(/([\+\-\*\/])/);
            // let r = eval(parseInt(c[0],2)+c[1]+parseInt(c[2],2));
            // res.textContent = r.toString(2);



//  function total() {
//     btnEql.addEventListener('click', function() {
//         //use this for switch statement for functions
//         switch()
//      })


//  }






