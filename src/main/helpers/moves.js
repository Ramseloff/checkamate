import { checkDiagonal } from './diagonalMoves';
import { checkLine } from './lineMoves';
import { pawnAttack, pawnMove } from './pawn';
import { knightMove } from './knight';

function checkEnemyPieceMove(x, y, color, pieces) {
    let permission = true;
    const arrayEnemyLineMoves = [];
    const arrayEnemyDiagonalMoves = [];
    const arrayEnemyKnightMoves = [];
    const arrayEnemyPawnMoves = [];

    arrayEnemyLineMoves.push(...checkLine(x, y, color, 8, pieces));

    for (const i of arrayEnemyLineMoves) {
        if (pieces.some((item) => (
            item.x === i.x && item.y === i.y && (item.piece.type === 'rook' || item.piece.type === 'queen')
        ))) permission = false;
    }

    arrayEnemyDiagonalMoves.push(...checkDiagonal(x, y, color, 8, pieces));

    for (const i of arrayEnemyDiagonalMoves) {
        if (pieces.some((item) => (
            item.x === i.x && item.y === i.y && (item.piece.type === 'bishop' || item.piece.type === 'queen')
        ))) permission = false;
    }

    arrayEnemyKnightMoves.push(...knightMove(x, y, color, pieces));

    for (const i of arrayEnemyKnightMoves) {
        if (pieces.some((item) => (
            item.x === i.x && item.y === i.y && item.piece.type === 'knight' && item.piece.color !== color
        ))) permission = false;
    }

    arrayEnemyPawnMoves.push(...pawnAttack(x, y, color, pieces));

    for (const i of arrayEnemyPawnMoves) {
        if (pieces.some((item) => (
            item.x === i.x && item.y === i.y && item.piece.type === 'pawn' && item.piece.color !== color
        ))) permission = false;
    }

    return permission;

}

function checkKingMove(
    x = 0,
    y = 0,
    color = '',
    arrayMoves = [],
    pieces = {}
) {
    const piecesWithoutKing = pieces.map((item) => {
        return item.x === x && item.y === y ? { ...item, ['piece']: {} } : item;
    });

    return arrayMoves.filter((item) => {
        const { x, y } = item

        return checkEnemyPieceMove(x, y, color, piecesWithoutKing);
    });
}

function checkPieceMove(
    x = 0,
    y = 0,
    color = '',
    arrayMoves = [],
    pieces = {}
) {
    const king = pieces.find((item) => item.piece.color === color && item.piece.type === 'king');
    const piece = pieces.find((item) => item.x === x && item.y === y);
    const piecesWithoutPiece = pieces.map((item) => {
        return item.x === x && item.y === y ? { ...item, ['piece']: {} } : item;
    });

    return arrayMoves.filter((item) => {
        const { x, y } = item

        const piecesWithNewPiece = piecesWithoutPiece.map((item) => {
            return item.x === x && item.y === y ? { ...item, ['piece']: piece } : item;
        });

        return checkEnemyPieceMove(king.x, king.y, color, piecesWithNewPiece);
    });
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

    return checkPieceMove(x, y, color, arrayMoves, pieces);
}

export const bishopMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...checkDiagonal(x, y, color, 8, pieces));

    return checkPieceMove(x, y, color, arrayMoves, pieces);
}

export const knightMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...knightMove(x, y, color, pieces));

    return checkPieceMove(x, y, color, arrayMoves, pieces);
}

export const rookMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...checkLine(x, y, color, 8, pieces));

    return checkPieceMove(x, y, color, arrayMoves, pieces);
}


export const pawnMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...pawnMove(x, y, color, pieces));
    arrayMoves.push(...pawnAttack(x, y, color, pieces));

    return checkPieceMove(x, y, color, arrayMoves, pieces);
}