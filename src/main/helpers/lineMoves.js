export function checkLine(
    x = 0,
    y = 0,
    color = '',
    max = 8,
    pieces = {},
) {
    const arrayMoves = [];

    arrayMoves.push(...checkLinePlus('x', x, 'y', y, color, max, pieces));
    arrayMoves.push(...checkLinePlus('y', y, 'x', x, color, max, pieces));
    arrayMoves.push(...checkLineMinus('x', x, 'y', y, color, max, pieces));
    arrayMoves.push(...checkLineMinus('y', y, 'x', x, color, max, pieces));

    return arrayMoves;
}

export function checkLinePlus(
    primary = '',
    primaryValue = 0,
    secondary = '',
    secondaryValue = 0,
    color = '',
    max = 8,
    pieces = {},
) {
    const arrayMoves = [];

    for (let i = 1; i < max; i++) {
        if (pieces.some((item) => (
            item[primary] === primaryValue + i && item[secondary] === secondaryValue
            && item.piece.color === color || primaryValue + i > 8
        ))) break;
        arrayMoves.push({ [primary]: primaryValue + i, [secondary]: secondaryValue })
        if (pieces.some((item) => (
            item[primary] === primaryValue + i && item[secondary] === secondaryValue
            && item.piece.hasOwnProperty('name')
        ))) break;
    }

    return arrayMoves;
}

export function checkLineMinus(
    primary = '',
    primaryValue = 0,
    secondary = '',
    secondaryValue = 0,
    color = '',
    max = 8,
    pieces = {},
) {
    const arrayMoves = [];

    for (let i = 1; i < max; i++) {
        if (pieces.some((item) => (
            item[primary] === primaryValue - i && item[secondary] === secondaryValue
            && item.piece.color === color || primaryValue - i < 1
        ))) break;
        arrayMoves.push({ [primary]: primaryValue - i, [secondary]: secondaryValue })
        if (pieces.some((item) => (
            item[primary] === primaryValue - i && item[secondary] === secondaryValue
            && item.piece.hasOwnProperty('name')
        ))) break;
    }

    return arrayMoves;
}
