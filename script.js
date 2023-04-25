const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function handleMove(event) {
    const square = event.target;
    const squareIndex = square.id;

    if (square.textContent !== '') return;

    square.textContent = currentPlayer;

    if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        resetGame();
        return;
    }

    if (checkDraw()) {
        alert(`It's a draw!`);
        resetGame();
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a].textContent !== '' &&
            squares[a].textContent === squares[b].textContent &&
            squares[b].textContent === squares[c].textContent
        ) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    let draw = true;

    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            draw = false;
            break;
        }
    }

    return draw;
}

function resetGame() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }

    currentPlayer = 'X';
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', handleMove);
}
