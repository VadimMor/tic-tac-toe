const playerItems = document.querySelectorAll('.player__item');
const gameCells = document.querySelectorAll('.game__cell');
const game = document.querySelector('.game');
const reset = document.querySelector('.reset');
const newGame = document.querySelector('.newGame');
const resultHTML = document.querySelector('.result');

var move = 0;
var winArr = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,4,8],
	[2,4,6],
	[0,3,6],
	[1,4,7],
	[2,5,8]
]
gameCells.forEach(gameCell =>
		gameCell.addEventListener('click', () => {
			if (move % 2 == 0) {
				gameCell.classList == 'game__cell' ? (
						gameCell.classList.add('x'),
						win(playerItems[0], 1),
						playerItems[0].classList.remove('active'),
						playerItems[1].classList.add('active'),
						move++
					): null;
			} else {
				gameCell.classList == 'game__cell' ? (
						gameCell.classList.add('o'),
						win(playerItems[1], 2),
						playerItems[1].classList.remove('active'),
						playerItems[0].classList.add('active'),
						move++
					): null;
			}
		})
	)

function win(element, numberPlayer) {
	for (var i=0; i<winArr.length; i++) {
		(gameCells[winArr[i][0]].classList.value == 'game__cell x' && gameCells[winArr[i][1]].classList.value == 'game__cell x' && gameCells[winArr[i][2]].classList.value == 'game__cell x' || gameCells[winArr[i][0]].classList.value == 'game__cell o' && gameCells[winArr[i][1]].classList.value == 'game__cell o' && gameCells[winArr[i][2]].classList.value == 'game__cell o') ? (
				element.innerHTML = `${Number(element.innerHTML)+1}`,
				resultHTML.innerHTML = `Победил игрок ${numberPlayer}`,
				resultHTML.classList.add('active')
			) : null;
	}
}

reset.addEventListener('click', () => {
	gameCells.forEach(gameCell => gameCell.className = 'game__cell');
	resultHTML.classList.remove('active');
	playerItems[1].classList.remove('active');
	playerItems[0].classList.add('active');
	move = 0;
})

newGame.addEventListener('click', () => {
	gameCells.forEach(gameCell => gameCell.className = 'game__cell');
	resultHTML.classList.remove('active');
	playerItems[1].classList.remove('active');
	playerItems[0].classList.add('active');
	playerItems.forEach(playerItem => playerItem.innerHTML = '0');
	move = 0;
})