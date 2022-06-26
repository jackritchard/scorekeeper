button1 = document.querySelector('.oneplayer')
button2 = document.querySelector('.twoplayer')
onescore = document.querySelector('.onescore')
twoscore = document.querySelector('.twoscore')
reset = document.querySelector('.reset')
select = document.querySelector('.num')
score = document.querySelector('#score')
record = document.querySelector('.record')
player1 = document.querySelector('.player1')
player2 = document.querySelector('.player2')

let playto = 11
let total = 0
let total2 = 0
let timeswon = 0
let timeswon2 = 0


onload = function(){
    select.min = (Math.max(total, total2)) + 1
}


function unfocus () {
    player2.contentEditable = false
    player1.contentEditable = false
}
function equaliser() {
    button1.textContent = `+1 ${player1.textContent}`
}
function equaliser2() {
    button2.textContent = `+1 ${player2.textContent}`
}


function endflash() {
    window.interval = window.setInterval(function () {
        reset.classList.toggle('endflash')
    }, 600)
} 
function smallbutton () {
    unfocus()
    button1.classList.add('HoverClass1')
    window.holdinc = window.setInterval(function(){
        total += 1
        onescore.textContent = `${total}`
        onload()
        if (total > total2){
            onescore.classList.add('redwin')
            twoscore.classList.remove('bluewin')
            
        }else if(total<total2){
            twoscore.classList.add('bluewin')
            onescore.classList.remove('redwin')
            
        }else if(total === total2){
            twoscore.classList.remove('bluewin')
            onescore.classList.remove('redwin')
            
        }if(total >= playto){
            window.clearInterval(holdinc)
            button2.disabled = true
            button1.disabled = true
            timeswon += 1
            record.textContent = `${timeswon} - ${timeswon2}`
            score.textContent = "Winner"
            score.classList.add('winmove')
            button1.classList.add('winner')
            button2.classList.add('winner')
            endflash()
            }
    
    }, 400) 
}

function twoplay() {
    unfocus()
    button2.classList.add('HoverClass2')
    window.holdinc2 = window.setInterval(function(){
        total2 += 1
        twoscore.textContent = `${total2}`
        onload()
        if (total > total2){
            onescore.classList.add('redwin')
            twoscore.classList.remove('bluewin')
            
        }else if(total<total2){
            twoscore.classList.add('bluewin')
            onescore.classList.remove('redwin')
            
        }else if(total === total2){
            twoscore.classList.remove('bluewin')
            onescore.classList.remove('redwin')
            
        }if(total2 >= playto){
            window.clearInterval(holdinc2)
            button2.disabled = true
            button1.disabled = true
            timeswon2 += 1
            record.textContent = `${timeswon} - ${timeswon2}`
            score.textContent = "Winner"
            score.classList.add('winmove2')
            button1.classList.add('winner')
            button2.classList.add('winner')
            endflash()
            }
    
    }, 400)
}




button2.addEventListener('mousedown', twoplay)
button1.addEventListener('mousedown', smallbutton)
button2.addEventListener('mouseup', function(){
    window.clearInterval(holdinc2)
    button2.classList.remove('HoverClass2')
    
})
button1.addEventListener('mouseup', function(){
    window.clearInterval(holdinc)
    button1.classList.remove('HoverClass1')
})
button1.addEventListener('click', () => {
    
    

    unfocus()
    total += 1
    onescore.textContent = `${total}`
    onload()
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

    if(total >= playto){
        button2.disabled = true
        button1.disabled = true
        timeswon += 1
        record.textContent = `${timeswon} - ${timeswon2}`
        score.textContent = "Winner"
        score.classList.add('winmove')
        button1.classList.add('winner')
        button2.classList.add('winner')
        endflash()
        }
        }
        



        
        
        
        
        
        
        
    
    
    
)

button2.addEventListener('click', () => {
    unfocus()
    total2 += 1
    twoscore.textContent = `${total2}`
    onload()
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
        button2.disabled = true
        button1.disabled = true
        timeswon2 += 1
        record.textContent = `${timeswon} - ${timeswon2}`
        score.textContent = "Winner"
        score.classList.add('winmove2')
        button1.classList.add('winner')
        button2.classList.add('winner')
        endflash()

        
        
        
    }
    
    
    
    
    
})


reset.addEventListener('click', re)
function re() {
    unfocus()
    onescore.textContent = 0
    twoscore.textContent = 0
    total = 0
    total2 = 0 
    twoscore.classList.remove('bluewin')
    onescore.classList.remove('redwin')
    button1.classList.remove('winner')
    button2.classList.remove('winner')
    score.classList.remove('winmove')
    score.classList.remove('winmove2')
    score.textContent = "Score"
    button1.disabled = false
    button2.disabled = false
    window.clearInterval(interval)
    reset.classList.remove('endflash')
    onload()
    
    }
select.addEventListener('change', (val) => {
    playto = parseInt(select.value)
    
    
})


player1.addEventListener('click', () => {
    player1.contentEditable = true
    player1.style.textAlign = "center"
    
    
    player1.focus()
    player1.addEventListener('keydown', (e) => {
        player1.setAttribute('minlength', 1)
        if(e.key === 'Enter'){
            player1.contentEditable = false
            player1.blur()
        }
       
        
        if (e.keyCode === 8) {
            player1.textContent = player1.textContent.slice(player1.target.selectionStart, -1)
            

        }
        
        if (player1.textContent.length > 8) {
            e.preventDefault()
            player1.contentEditable = false
            player1.blur()
        }
                
                
            
            

            
            
                
        })
        
    
    player1.addEventListener('keyup', (e) => {
        
        
               
        if (player1.textContent.length > 8) {
            e.preventDefault()
            player1.contentEditable = false
            player1.blur()
        }
       equaliser()
       
       })
    
    })
player2.addEventListener('click', () => {
    player2.contentEditable = true
    player2.style.textAlign = "center"
    
        
    player2.focus()
    player2.addEventListener('keydown', (e) => {
        player2.setAttribute('minlength', 1)
        if(e.key === 'Enter'){
            player2.contentEditable = false
            player2.blur()
            }
           
            
        if (e.keyCode === 8) {
            player2.textContent = player2.textContent.slice(player2.target.selectionStart, -1)
                

        }if (player2.textContent.length > 8) {
            e.preventDefault()
            player2.contentEditable = false
            player2.blur()
        }
            
            
                    
                    
                
                
            
            
                
    })
            
        
    player2.addEventListener('keyup', (e) => {
        
            
        
            
                   
        if (player2.textContent.length > 8) {
            e.preventDefault()
            player2.contentEditable = false
            player2.blur()
        }
        equaliser2()
           
        })
        
})

       

