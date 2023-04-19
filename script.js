console.log('JS file successfully connected...')

let count = 0;

// get HTML element querySeclector
let counter = document.querySelector('#counter')
let plusBtn = document.querySelector('#plus-btn')
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#rest-btn')
// create Callback
let increment = () => {
    count ++
    counter.textContent = count
    console.log('button clicked count incremented', count)
}

let decrement = () => {
    if(count - 1 >= 0) {
        count --
        counter.textContent = count
        console.log('button clicked count decremented', count)  
    }
}

let reset = () => {
    count = 0
    counter.textContent = count
    console.log(count)
}
//connect the HTML element and callBack with event

plusBtn.addEventListener('click', increment)
minusBtn.addEventListener('click', decrement)
resetBtn.addEventListener('click', reset)

/*let increment = () => {
    count++;
    console.log(count)
}

increment()

let decrement = () => {
    count --
    console.log(decrement)
}

let reset = () => {
    count = 0
    console.log(count)
}

decrement()
decrement()
decrement()

reset()*/