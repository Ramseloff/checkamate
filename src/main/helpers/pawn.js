export function pawnMove(
    x = 0,
    y = 0,
    color = '',
    pieces = {},
) {
    const arrayMoves = [];
    const max = {
        white: x === 7 ? 3 : 2,
        black: x === 2 ? 3 : 2,
    }
    const sign = {
        white: -1,
        black: 1,
    }

    for (let i = 1; i < max[color]; i++) {
        if (pieces.some((item) => (
            item.x === x + (i * sign[color]) && item.y === y && item.piece.hasOwnProperty('name')
        ))) break;
        arrayMoves.push({ x: x + (i * sign[color]), y: y })
    }

    return arrayMoves;
}

export function pawnAttack(
    x = 0,
    y = 0,
    color = '',
    pieces = {},
) {
    const arrayMoves = [];
    const sign = {
        white: -1,
        black: 1,
    }
    const attack = {
        1: -1,
        2: 1,
    };

    for (let i = 1; i < 3; i++) {
        if (pieces.some((item) => (
            item.x === x + sign[color] && item.y === y + attack[i]
            && item.piece.hasOwnProperty('name') && color !== item.piece.color
        ))) arrayMoves.push({ x: x + sign[color], y: y + attack[i] })
    }

    return arrayMoves;
}