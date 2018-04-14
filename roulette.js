$(document).ready(function(){

    
    
    // Function to generate randkm number and check if corresponds to user input
    $("#randomWholeNum").click(function(){
        
        var money = parseInt($("#betMoney").val());
        var userColor = $("#betColor").val();
        var number = parseInt($("#betNumber").val());
        
        //Generate a random number
        var x = Math.floor(Math.random() * 37);
        var color='';
        
        //Assign a color to each number
        
        if (x === 0){
        var color = 'green';
        }
        else if (x%2 === 0){
            var color = 'red';
        }
        else {
            var color = 'black';
        }
        
        //Check user color input and update WIn
        
        if(userColor == color){
            $("#output1").text(money * 2);
        }
        else{
            $("#output1").text(money * 0);
        }
        
        
        //Check user number input and update WIn
        
        if(number == x){
            $("#output1").text(money * 36);
        }
        else{
            $("#output1").text(money * 0);
        }
    });
    
    
});
