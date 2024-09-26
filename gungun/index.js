function player1(){
	var Score=Math.floor(Math.random()*6)+1;
	var Img=document.getElementsById('p1-img');
	Img.src='images/dice${Score}.png';
	return Score
}
funtion player2(){
	let score=Math.floor(Math.random()*6)+1;
	var Img=document.getElementsById('p2-img');
	Img.src = 'images/dice${Score}.png'
	return Score
}
let playAgainButton = document.querySelector('.btn');

playAgainButton.addEventListner('click',function(event){
	playAgainButton.innerHTML="Play Again!"
	let p1heading=document.querySelector('.player-1 h3');
	let p2heading=document.querySelector('.player-2 h3');
	let p1score=player1();
	let p2score=player2();

	if(p1score>p2score){
		result.innerHTML="Player 1 win";
		p1heading.innerHTML="You win";
		p2heading.innerHTML="You lose";
	}else if (p1score<p2score){
		result.innerHTML="Player 2 win";
		p2heading.innerHTML="You win";
		p1heading.innerHTML="You lose";
	}else{
		result.innerHTML="Draw!";
		p1heading.innerHTML="Draw!";
		p2heading.innerHTML="Draw!";
	}
});