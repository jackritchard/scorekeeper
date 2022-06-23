button1 = document.querySelector('.oneplayer')
button2 = document.querySelector('.twoplayer')
onescore = document.querySelector('.onescore')
twoscore = document.querySelector('.twoscore')
reset = document.querySelector('.reset')
select = document.querySelector('.num')
let playto = 2
let total = 0
let total2 = 0
let timeswon = 0
let timeswon2 = 0
let att = document.createAttribute("style")
att.value = "color:red";



button1.addEventListener('click', () => {
    total += 1
    onescore.textContent = `${total}`
    if (total > total2){
        onescore.classList.add('redwin')
        twoscore.classList.remove('bluewin')
    }else if(total<total2){
        twoscore.classList.add('bluewin')
        onescore.classList.remove('redwin')
    }else if(total === total2){
        twoscore.classList.remove('bluewin')
        onescore.classList.remove('redwin')
    }

    if (total >= playto){
        total = playto
        timeswon += 1
        alert("Player 1 wins!")
        runningscore()
        re()
    }
    
})

button2.addEventListener('click', () => {
    total2 += 1
    twoscore.textContent = `${total2}`
    if (total > total2){
        onescore.classList.add('redwin')
        twoscore.classList.remove('bluewin')
    }else if(total<total2){
        twoscore.classList.add('bluewin')
        onescore.classList.remove('redwin')
    }else if(total === total2){
        twoscore.classList.remove('bluewin')
        onescore.classList.remove('redwin')
    }
    if (total2 >= playto){
        total2 = playto
        timeswon2 += 1
        alert("Player 2 wins!")
        runningscore()
        re()
    }
    
})


reset.addEventListener('click', re)
function re() {
    onescore.textContent = 0
    twoscore.textContent = 0
    total = 0
    total2 = 0 
    twoscore.classList.remove('bluewin')
    onescore.classList.remove('redwin')
    }
select.addEventListener('change', (val) => {
    playto = parseInt(select.value)
    
    
})

function runningscore() {
    alert(`Player 1 has won ${timeswon} time(s). Player 2 has won ${timeswon2} time(s)`)
   
}



