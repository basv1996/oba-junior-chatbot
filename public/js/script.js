const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')

buttons[0].classList.add('disable')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (slider.scrollLeft < 1151) {
            buttons[0].classList.add('disable')
        }
        if (Array.prototype.indexOf.call(buttons, e.target) === 0) {
            slider.scrollLeft -= 1150
            buttons[1].classList.remove('disable')
              
        } else if (Array.prototype.indexOf.call(buttons, e.target) === 1) {
            slider.scrollLeft += 1150
            buttons[0].classList.remove('disable')

            if (slider.scrollLeft >= 2000) {
                buttons[1].classList.add('disable')
            }
        }

    })
})




