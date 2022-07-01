export function checkLinePlus(primary, primaryValue, secondary, secondaryValue, color, max, pieces) {
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

export function checkLineMinus(primary, primaryValue, secondary, secondaryValue, color, max, pieces) {
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
