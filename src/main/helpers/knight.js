import { arrayKnightMoves } from '../config/config';

export function knightMove(
    x = 0,
    y = 0,
    color = '',
    pieces = {},
) {
    const arrayMoves = [];

    for (const i of arrayKnightMoves) {
        if (pieces.some((item) => (item.x === x + i.x && item.y === y + i.y && (
                !item.piece.hasOwnProperty('name') || color !== item.piece.color
            )))) arrayMoves.push({ x: x + i.x, y: y + i.y });
    }

    return arrayMoves;
}