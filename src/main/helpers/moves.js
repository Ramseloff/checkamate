import { checkDiagonal } from './diagonalMoves';
import { checkLine } from './lineMoves';
import { pawnAttack, pawnMove } from './pawn';
import { knightMove } from './knight';
import { arrayCastlingAttackCells, arrayCastlingCheckCells, arrayCastlingMoves } from '../config/config';

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

function checkCastlingCells(castlingPermission, checkCells, attackCells, color, arrayMoves, pieces) {
    const permissionAttack = arrayMoves.some((i) => (i.x === attackCells.x && i.y === attackCells.y))

    let permissionMove = true;
    checkCells.map((i) => {
        if (pieces.some((item) => (
            item.x === i.x && item.y === i.y && item.piece.name
        ))) permissionMove = false;
    })

    return permissionMove && permissionAttack && castlingPermission;
}

function castlingMoves(
    x = 0,
    y = 0,
    color = '',
    arrayCheckedMoves = [],
    pieces = {},
) {
    const arrayMoves = [];
    const king = pieces.find((item) => item.piece.color === color && item.piece.type === 'king');

    // Проверка разрешения рокировки направо
    let castlingPermissionRight = checkCastlingCells(
        king.piece.castling.right,
        arrayCastlingCheckCells(x, y).right,
        arrayCastlingAttackCells(x, y).right,
        color,
        arrayCheckedMoves,
        pieces,
    );

    // Проверка разрешения рокировки налево
    let castlingPermissionLeft = checkCastlingCells(
        king.piece.castling.left,
        arrayCastlingCheckCells(x, y).left,
        arrayCastlingAttackCells(x, y).left,
        color,
        arrayCheckedMoves,
        pieces,
    );

    //Разрешение рокировки если нет шах королю
    const checkPermission = (checkEnemyPieceMove(x, y, color, pieces));

    // Если есть разрешения добавить королю поля для движения
    if (castlingPermissionRight && checkPermission) arrayMoves.push(arrayCastlingMoves(x, y).right);
    if (castlingPermissionLeft&& checkPermission) arrayMoves.push(arrayCastlingMoves(x, y).left);

    return arrayMoves;
}


export const kingMoves = (x = 0, y = 0, color = '', pieces = {}) => {
    const arrayMoves = [];

    arrayMoves.push(...checkLine(x, y, color, 2, pieces));
    arrayMoves.push(...checkDiagonal(x, y, color, 2, pieces));

    const arrayCheckedMoves = checkKingMove(x, y, color, arrayMoves, pieces)
    arrayMoves.push(...castlingMoves(x, y, color, arrayCheckedMoves, pieces));

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