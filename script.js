// script.js

let currentPlayer = 'X';
let board = 
	['', '', '', '', '', 
	'', '', '', ''];
let gameActive = true;
const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
function handleClick(index) {
	if (gameActive && board[index] === '') {
		board[index] = currentPlayer;
		document.getElementById(index).
			innerText = currentPlayer;
		checkWinner();
		togglePlayer();
	}
}
function checkWinner() {
	for (let i = 0; i < winningConditions.length; i++) {
		const [a, b, c] = winningConditions[i];
		if (board[a] && board[a] === board[b] && 
			board[a] === board) {
			gameActive = false;
			document.getElementById('status').
				innerText = `${currentPlayer} wins!`;
			return;
		}
	}
	if (!board.includes('')) {
		gameActive = false;
		document.getElementById('status').
			innerText = "It's a draw!";
	}
}
function togglePlayer() {
	currentPlayer = currentPlayer === 
		'X' ? 'O' : 'X';
}
function restartGame() {
	currentPlayer = 'X';
	board = ['', '', '', '', '', 
			'', '', '', ''];
	gameActive = true;
	document.getElementById('status').innerText = '';
	for (let i = 0; i < 9; i++) {
		document.getElementById(i).innerText = '';
	}
}
