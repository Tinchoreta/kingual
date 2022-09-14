const inputs = document.querySelectorAll("input")
inputs.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "foco-en-input")
    input.addEventListener("blur", ()=> input.className = "")

    input.addEventListener("keypress", (e)=> { //e = Objeto global EVENT
        if (e.key === "Enter") {
            let index = e.target.tabIndex
            if (input.tabIndex === (inputs.length - 1)) {
                inputs[0].focus()
            } else {
                inputs[index + 1].focus()
            }
        }
    })
})

const form = document.querySelector("form")

form.addEventListener("submit", (e)=> {
    e.preventDefault()
})