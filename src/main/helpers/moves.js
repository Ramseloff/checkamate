import {
    checkDiagonalLeftDown,
    checkDiagonalLeftUp,
    checkDiagonalRightDown,
    checkDiagonalRightUp,
} from './diagonalMoves';
import { checkLineMinus, checkLinePlus } from './lineMoves';
import { pawnAttack, pawnMove } from './pawn';

export const kingMoves = (x, y, color, pieces) => {
    const arrayMoves = [];

    arrayMoves.push(...checkLinePlus('x', x, 'y', y, color, 2, pieces));
    arrayMoves.push(...checkLinePlus('y', y, 'x', x, color, 2, pieces));
    arrayMoves.push(...checkLineMinus('x', x, 'y', y, color, 2, pieces));
    arrayMoves.push(...checkLineMinus('y', y, 'x', x, color, 2, pieces));
    arrayMoves.push(...checkDiagonalRightUp(x, y, color, 2, pieces));
    arrayMoves.push(...checkDiagonalRightDown(x, y, color, 2, pieces));
    arrayMoves.push(...checkDiagonalLeftUp(x, y, color, 2, pieces));
    arrayMoves.push(...checkDiagonalLeftDown(x, y, color, 2, pieces));

    return arrayMoves;
}

export const queenMoves = (x, y, color, pieces) => {
    const arrayMoves = [];

    arrayMoves.push(...checkLinePlus('x', x, 'y', y, color, 8, pieces));
    arrayMoves.push(...checkLinePlus('y', y, 'x', x, color, 8, pieces));
    arrayMoves.push(...checkLineMinus('x', x, 'y', y, color, 8, pieces));
    arrayMoves.push(...checkLineMinus('y', y, 'x', x, color, 8, pieces));
    arrayMoves.push(...checkDiagonalRightUp(x, y, color, 8, pieces));
    arrayMoves.push(...checkDiagonalRightDown(x, y, color, 8, pieces));
    arrayMoves.push(...checkDiagonalLeftDown(x, y, color, 8, pieces));
    arrayMoves.push(...checkDiagonalLeftUp(x, y, color, 8, pieces));

    return arrayMoves;
}

export const bishopMoves = (x, y, color, pieces) => {
    const arrayMoves = [];

    arrayMoves.push(...checkDiagonalRightUp(x, y, color, 8, pieces));
    arrayMoves.push(...checkDiagonalRightDown(x, y, color, 8, pieces));
    arrayMoves.push(...checkDiagonalLeftDown(x, y, color, 8, pieces));
    arrayMoves.push(...checkDiagonalLeftUp(x, y, color, 8, pieces));

    return arrayMoves;
}

export const knightMoves = (x, y, color, pieces) => {
    const arrayMoves = [
        { x: x - 2, y: y - 1 }, { x: x - 2, y: y + 1 },
        { x: x + 2, y: y - 1 }, { x: x + 2, y: y + 1 },
        { x: x - 1, y: y - 2 }, { x: x - 1, y: y + 2 },
        { x: x + 1, y: y - 2 }, { x: x + 1, y: y + 2 },
    ];

    return arrayMoves.filter((i) => pieces.some(
        (item) => (item.x === i.x && item.y === i.y && (
            !item.piece.hasOwnProperty('name') || color !== item.piece.color
        )),
    ));
}

export const rookMoves = (x, y, color, pieces) => {
    const arrayMoves = [];

    arrayMoves.push(...checkLinePlus('x', x, 'y', y, color, 8, pieces));
    arrayMoves.push(...checkLinePlus('y', y, 'x', x, color, 8, pieces));
    arrayMoves.push(...checkLineMinus('x', x, 'y', y, color, 8, pieces));
    arrayMoves.push(...checkLineMinus('y', y, 'x', x, color, 8, pieces));

    return arrayMoves;
}


export const pawnMoves = (x, y, color, pieces) => {
    const arrayMoves = [];

    arrayMoves.push(...pawnMove(x, y, color, pieces));
    arrayMoves.push(...pawnAttack(x, y, color, pieces));

    return arrayMoves;
}