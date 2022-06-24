button1 = document.querySelector('.oneplayer')
button2 = document.querySelector('.twoplayer')
onescore = document.querySelector('.onescore')
twoscore = document.querySelector('.twoscore')
reset = document.querySelector('.reset')
select = document.querySelector('.num')
score = document.querySelector('#score')
record = document.querySelector('.record')


let playto = 11
let total = 0
let total2 = 0
let timeswon = 0
let timeswon2 = 0




function endflash () {
    window.interval = window.setInterval(function(){
        reset.classList.toggle('endflash')
    }, 600)
    } 
function smallbutton () {
    window.holdinc = window.setInterval(function(){
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
    
    }, 600)
}

function twoplay() {
    window.holdinc2 = window.setInterval(function(){
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
    
    }, 600)
}


button2.addEventListener('mousedown', twoplay)
button1.addEventListener('mousedown', smallbutton)
button2.addEventListener('mouseup', function(){
    window.clearInterval(holdinc2)
})
button1.addEventListener('mouseup', function(){
    window.clearInterval(holdinc)
})
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
    
    }
select.addEventListener('change', (val) => {
    playto = parseInt(select.value)
    
    
})




    
