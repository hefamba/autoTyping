const textEl = document.getElementById('text')
const inputEl = document.getElementById('input')
const btn = document.getElementById('btn')
let text = ''
let i = 1

function typeOut(){
    btn.addEventListener('click', ()=>{  
        i = 1
        textEl.innerText = ''

        text = inputEl.value
        inputEl.value = ''
       writeText()
    })

    inputEl.addEventListener('keydown', (event) =>{
       if ( event.key === 'Enter'){
        i = 1
        textEl.innerText = ''

        text = inputEl.value
        inputEl.value = ''
         writeText()
       }
       
       
    })
}

function writeText(){

    textEl.innerText = text.slice(0,i)
    i++

    if (i <= text.length){
        setTimeout(writeText, 90)
    }

}


typeOut()
