console.log('Themes.js is connected...')

// Get HTML element
let themeBtns = document.querySelectorAll('.theme-buttons')
let main = document.querySelector('main')
let body = document.querySelector('body')
let btns = document.querySelectorAll('button')
// Create callBack
let themeSelector = (evt) => {
    let theme = evt.target.textContent
    body.className = theme //targets one button
    main.className = theme

    for (let i = 0; i < btns.length; i++) {
        btns[i].className = theme
    }
}
// connect html with callBack using event listener 
console.log(themeBtns)

for (let i = 0; i < themeBtns; i++) {
    themeBtns[i].addEventListener('click', themeSelector)
}

