import { checkDiagonal } from './diagonalMoves';
import { checkLine } from './lineMoves';
import { pawnAttack, pawnMove } from './pawn';

function checkKingMove(x, y, color, arrayMoves = [], pieces = {}) {
    const piecesWithoutKing = pieces.map((item) => {
        return item.x === x && item.y === y ? {} : item;
    });

    const checkedMoves = arrayMoves.filter((item) => {
        let permission = true;
        const { x, y } = item
        const arrayEnemyLineMoves = [];
        const arrayEnemyDiagonalMoves = [];

        arrayEnemyLineMoves.push(...checkLine(x, y, color, 8, piecesWithoutKing));

        for (const i of arrayEnemyLineMoves) {
            if (pieces.some((item) => (
                item.x === i.x && item.y === i.y && (item.piece.type === 'rook' || item.piece.type === 'queen')
            ))) permission = false;
        }

        arrayEnemyDiagonalMoves.push(...checkDiagonal(x, y, color, 8, piecesWithoutKing));

        for (const i of arrayEnemyDiagonalMoves) {
            if (pieces.some((item) => (
                item.x === i.x && item.y === i.y && (item.piece.type === 'bishop' || item.piece.type === 'queen')
            ))) permission = false;
        }

        const arrayKnightMoves = [
            { x: x - 2, y: y - 1 }, { x: x - 2, y: y + 1 },
            { x: x + 2, y: y - 1 }, { x: x + 2, y: y + 1 },
            { x: x - 1, y: y - 2 }, { x: x - 1, y: y + 2 },
            { x: x + 1, y: y - 2 }, { x: x + 1, y: y + 2 },
        ];

        // for (const i of arrayKnightMoves) {
        //     if (pieces.some((item) => (
        //         item.x === i.x && item.y === i.y && item.piece.type === 'knight'
        //     ))) permission = false;
        // }

        return permission;
    })

    return checkedMoves;
}


export const kingMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...checkLine(x, y, color, 2, pieces));
    arrayMoves.push(...checkDiagonal(x, y, color, 2, pieces));

    return checkKingMove(x, y, color, arrayMoves, pieces);
}

export const queenMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...checkLine(x, y, color, 8, pieces));
    arrayMoves.push(...checkDiagonal(x, y, color, 8, pieces));

    return arrayMoves;
}

export const bishopMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...checkDiagonal(x, y, color, 8, pieces));

    return arrayMoves;
}

export const knightMoves = (x = 0, y = 0, color = '', pieces = {}) => {
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

export const rookMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];
    arrayMoves.push(...checkLine(x, y, color, 8, pieces));

    return arrayMoves;
}


export const pawnMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...pawnMove(x, y, color, pieces));
    arrayMoves.push(...pawnAttack(x, y, color, pieces));

    return arrayMoves;
}