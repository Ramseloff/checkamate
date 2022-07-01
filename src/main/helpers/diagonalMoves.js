export function checkDiagonalRightUp(x, y, color, max, pieces) {
    const arrayMoves = [];

    for (let i = 1; i < max; i++) {
        if (pieces.some((item) => (
            item.x === x - i && item.y === y + i && item.piece.color === color || x - i < 1 || y + i > 8
        ))) break;
        arrayMoves.push({ x: x - i, y: y + i })
        if (pieces.some((item) => (
            item.x === x - i && item.y === y + i && item.piece.hasOwnProperty('name')
        ))) break;
    }

    return arrayMoves;
}

export function checkDiagonalRightDown(x, y, color, max, pieces) {
    const arrayMoves = [];

    for (let i = 1; i < max; i++) {
        if (pieces.some((item) => (
            item.x === x + i && item.y === y + i && item.piece.color === color || x + i > 8 || y + i > 8
        ))) break;
        arrayMoves.push({ x: x + i, y: y + i })
        if (pieces.some((item) => (
            item.x === x + i && item.y === y + i && item.piece.hasOwnProperty('name')
        ))) break;
    }

    return arrayMoves;
}

export function checkDiagonalLeftUp(x, y, color, max, pieces) {
    const arrayMoves = [];

    for (let i = 1; i < max; i++) {
        if (pieces.some((item) => (
            item.x === x - i && item.y === y - i && item.piece.color === color || x - i < 1 || y - i < 1
        ))) break;
        arrayMoves.push({ x: x - i, y: y - i })
        if (pieces.some((item) => (
            item.x === x - i && item.y === y - i && item.piece.hasOwnProperty('name')
        ))) break;
    }

    return arrayMoves;
}

export function checkDiagonalLeftDown(x, y, color, max, pieces) {
    const arrayMoves = [];

    for (let i = 1; i < max; i++) {
        if (pieces.some((item) => (
            item.x === x + i && item.y === y - i && item.piece.color === color || x + i > 8 || y - i < 1
        ))) break;
        arrayMoves.push({ x: x + i, y: y - i })
        if (pieces.some((item) => (
            item.x === x + i && item.y === y - i && item.piece.hasOwnProperty('name')
        ))) break;
    }

    return arrayMoves;
}