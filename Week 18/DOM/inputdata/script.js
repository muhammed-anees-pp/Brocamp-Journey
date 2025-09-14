
// const button = document.querySelector('.btn')

// const input = document.querySelector('.data')

// const output = document.querySelector('.output')


// function myButton() {
//     // alert(input.value)

//     let data = input.value;
//     output.textContent = data
// }

// button.addEventListener('click',myButton)


/////////////////////////////////////////////////////////////////
// const button = document.querySelector('.sum-btn')

// const numone = document.querySelector('.numone')
// const nuntwo = document.querySelector('.numtwo')

// const result = document.querySelector('.result')

// function sumbtn(){
//     let num1 = Number(numone.value);
//     let num2 = Number(nuntwo.value);
//     let sum = num1 + num2
//     result.textContent = sum;
// }

// button.addEventListener('click',sumbtn)




///////////////////////////Split calculator//////////

const count = document.querySelector('.count')
const total = document.querySelector('.total')
const output = document.querySelector('.output')

const button = document.querySelector('.btn')

function splitamount() {
    let amount = Number(total.value);
    let no = Number(count.value);

    let avg = amount / no

    output.textContent = `RS: ${avg}`
}


button.addEventListener('click',splitamount)
