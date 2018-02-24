  $(document).ready(function() {

  	var userTotal = 0;
  	var wins = 0;
  	var losses = 0;
  	number1 = Math.floor(Math.random() * 11 + 1);
    number2 = Math.floor(Math.random() * 11 + 1);
   	number3 = Math.floor(Math.random() * 11 + 1);
   	number4 = Math.floor(Math.random() * 11 + 1);

  	$(".NumberOfWins").text(wins);
  	$(".NumberOfLosses").text(losses);
	$(".RunningTotal").text(userTotal);


	var random = Math.floor(Math.random() * 101 + 19);
    console.log(random)
    $("#random-number").text(random);

  	//Resets the game
  	function reset() {
		random = Math.floor(Math.random() * 101 + 19);
      	console.log(random)
    	$("#random-number").text(random);
    	number1 = Math.floor(Math.random() * 11 + 1);
    	number2 = Math.floor(Math.random() * 11 + 1);
    	number3 = Math.floor(Math.random() * 11 + 1);
    	number4 = Math.floor(Math.random() * 11 + 1);
    	userTotal = 0;
    	$("#RunningTotal").text(userTotal);

    	//Something else goes here!!!!
	 
	 }

  	//Adds a win to the Usertotal
	function winner(){
	alert("You've matched the numbers, you win!!!");
  	wins++; 
  	$("#NumberOfWins").text(wins);
  	reset();
	}

	//addes the losses to the userTotal
	function loser(){
	alert ("You lost!!");
  	losses++;
  	$("#NumberOfLosses").text(losses);
  	reset();
	}
     //Click jewels

     $(".Crystal1").on("click", function(){
     	userTotal = userTotal + number1;
     	console.log("New userTotal= " + userTotal);
     	$("#RunningTotal").text(userTotal);

     	if (userTotal === random){
     		winner();
     	}
     	else if (userTotal > random){
     		loser();
     		}
     })

     $(".Crystal2").on("click", function(){
     	userTotal = userTotal + number2;
     	console.log("New userTotal= " + userTotal);
     	$("#RunningTotal").text(userTotal);

     	if (userTotal === random){
     		winner();
     	}
     	else if (userTotal > random){
     		loser();
     		}
     })

     $(".Crystal3").on("click", function(){
     	userTotal = userTotal + number3;
     	console.log("New userTotal= " + userTotal);
     	$("#RunningTotal").text(userTotal);

     	if (userTotal === random){
     		winner();
     	}
     	else if (userTotal > random){
     		loser();
     		}
     })

     $(".Crystal4").on("click", function(){
     	userTotal = userTotal + number4;
     	console.log("New userTotal= " + userTotal);
     	$("#RunningTotal").text(userTotal);

     	if (userTotal === random){
     		winner();
     	}
     	else if (userTotal > random){
     		loser();
     		}
     })



});


