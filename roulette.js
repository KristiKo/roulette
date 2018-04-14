document.getElementById("betBtn").addEventListener('click', PlaceBet(), false);

function PlaceBet() {
    
var money = document.getElementById("betMoney").value;
    
    var colorBet = document.getElementById("betColor").value;
    var number = document.getElementById("betNumber").value;
    
}


document.getElementById("randomWholeNum").addEventListener ( 'click', randomWholeNum(), false);

function randomWholeNum() {
    
    var x = Math.floor(Math.random() * 37);
    var color='';
    
    if (x === 0){
        var color = 'green'; 
    }
    else if (x%2 === 0){
        var color = 'red';
    }
    else {
        var color = 'black';
    }
        
    document.getElementById("output").innerHTML = x + ' ' + color;
     
}

    
    
 
   

    
    
   