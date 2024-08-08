
const dis = document.getElementById('display')

let counter = 0;

function addOne() {
    counter = counter+1
    dis.innerHTML=counter
    
}

function newCount() {
    counter = 0
    dis.innerHTML=counter
    
}

