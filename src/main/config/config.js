export const field = [
    { x: 1, y: 1, name: 'a8', piece: { type: 'rook', color: 'black', name: 'blackRookQ', img: 'blackRook.svg' } },
    { x: 1, y: 2, name: 'b8', piece: { type: 'knight', color: 'black', name: 'blackKnightQ', img: 'blackKnight.svg' } },
    { x: 1, y: 3, name: 'c8', piece: { type: 'bishop', color: 'black', name: 'blackBishopQ', img: 'blackBishop.svg' } },
    { x: 1, y: 4, name: 'd8', piece: { type: 'queen', color: 'black', name: 'blackQueen', img: 'blackQueen.svg' } },
    {
        x: 1, y: 5, name: 'e8',
        piece: {
            type: 'king',
            color: 'black',
            name: 'blackKing',
            img: 'blackKing.svg',
            castling: { left: true, right: true },
        },
    },
    { x: 1, y: 6, name: 'f8', piece: { type: 'bishop', color: 'black', name: 'blackBishopK', img: 'blackBishop.svg' } },
    { x: 1, y: 7, name: 'g8', piece: { type: 'knight', color: 'black', name: 'blackKnightK', img: 'blackKnight.svg' } },
    { x: 1, y: 8, name: 'h8', piece: { type: 'rook', color: 'black', name: 'blackRookK', img: 'blackRook.svg' } },

    { x: 2, y: 1, name: 'a7', piece: { type: 'pawn', color: 'black', name: 'blackPawnA', img: 'blackPawn.svg' } },
    { x: 2, y: 2, name: 'b7', piece: { type: 'pawn', color: 'black', name: 'blackPawnB', img: 'blackPawn.svg' } },
    { x: 2, y: 3, name: 'c7', piece: { type: 'pawn', color: 'black', name: 'blackPawnC', img: 'blackPawn.svg' } },
    { x: 2, y: 4, name: 'd7', piece: { type: 'pawn', color: 'black', name: 'blackPawnD', img: 'blackPawn.svg' } },
    { x: 2, y: 5, name: 'e7', piece: { type: 'pawn', color: 'black', name: 'blackPawnE', img: 'blackPawn.svg' } },
    { x: 2, y: 6, name: 'f7', piece: { type: 'pawn', color: 'black', name: 'blackPawnF', img: 'blackPawn.svg' } },
    { x: 2, y: 7, name: 'g7', piece: { type: 'pawn', color: 'black', name: 'blackPawnG', img: 'blackPawn.svg' } },
    { x: 2, y: 8, name: 'h7', piece: { type: 'pawn', color: 'black', name: 'blackPawnH', img: 'blackPawn.svg' } },

    { x: 3, y: 1, name: 'a6', piece: {} }, { x: 3, y: 2, name: 'b6', piece: {} },
    { x: 3, y: 3, name: 'c6', piece: {} }, { x: 3, y: 4, name: 'd6', piece: {} },
    { x: 3, y: 5, name: 'e6', piece: {} }, { x: 3, y: 6, name: 'f6', piece: {} },
    { x: 3, y: 7, name: 'g6', piece: {} }, { x: 3, y: 8, name: 'h6', piece: {} },

    { x: 4, y: 1, name: 'a5', piece: {} }, { x: 4, y: 2, name: 'b5', piece: {} },
    { x: 4, y: 3, name: 'c5', piece: {} }, { x: 4, y: 4, name: 'd5', piece: {} },
    { x: 4, y: 5, name: 'e5', piece: {} }, { x: 4, y: 6, name: 'f5', piece: {} },
    { x: 4, y: 7, name: 'g5', piece: {} }, { x: 4, y: 8, name: 'h5', piece: {} },

    { x: 5, y: 1, name: 'a4', piece: {} }, { x: 5, y: 2, name: 'b4', piece: {} },
    { x: 5, y: 3, name: 'c4', piece: {} }, { x: 5, y: 4, name: 'd4', piece: {} },
    { x: 5, y: 5, name: 'e4', piece: {} }, { x: 5, y: 6, name: 'f4', piece: {} },
    { x: 5, y: 7, name: 'g4', piece: {} }, { x: 5, y: 8, name: 'h4', piece: {} },

    { x: 6, y: 1, name: 'a3', piece: {} }, { x: 6, y: 2, name: 'b3', piece: {} },
    { x: 6, y: 3, name: 'c3', piece: {} }, { x: 6, y: 4, name: 'd3', piece: {} },
    { x: 6, y: 5, name: 'e3', piece: {} }, { x: 6, y: 6, name: 'f3', piece: {} },
    { x: 6, y: 7, name: 'g3', piece: {} }, { x: 6, y: 8, name: 'h3', piece: {} },

    { x: 7, y: 1, name: 'a2', piece: { type: 'pawn', color: 'white', name: 'whitePawnA', img: 'whitePawn.svg' } },
    { x: 7, y: 2, name: 'b2', piece: { type: 'pawn', color: 'white', name: 'whitePawnB', img: 'whitePawn.svg' } },
    { x: 7, y: 3, name: 'c2', piece: { type: 'pawn', color: 'white', name: 'whitePawnC', img: 'whitePawn.svg' } },
    { x: 7, y: 4, name: 'd2', piece: { type: 'pawn', color: 'white', name: 'whitePawnD', img: 'whitePawn.svg' } },
    { x: 7, y: 5, name: 'e2', piece: { type: 'pawn', color: 'white', name: 'whitePawnE', img: 'whitePawn.svg' } },
    { x: 7, y: 6, name: 'f2', piece: { type: 'pawn', color: 'white', name: 'whitePawnF', img: 'whitePawn.svg' } },
    { x: 7, y: 7, name: 'g2', piece: { type: 'pawn', color: 'white', name: 'whitePawnG', img: 'whitePawn.svg' } },
    { x: 7, y: 8, name: 'h2', piece: { type: 'pawn', color: 'white', name: 'whitePawnH', img: 'whitePawn.svg' } },

    { x: 8, y: 1, name: 'a1', piece: { type: 'rook', color: 'white', name: 'whiteRookQ', img: 'whiteRook.svg' } },
    { x: 8, y: 2, name: 'b1', piece: { type: 'knight', color: 'white', name: 'whiteKnightQ', img: 'whiteKnight.svg' } },
    { x: 8, y: 3, name: 'c1', piece: { type: 'bishop', color: 'white', name: 'whiteBishopQ', img: 'whiteBishop.svg' } },
    { x: 8, y: 4, name: 'd1', piece: { type: 'queen', color: 'white', name: 'whiteQueen', img: 'whiteQueen.svg' } },
    {
        x: 8,
        y: 5,
        name: 'e1',
        piece: {
            type: 'king',
            color: 'white',
            name: 'whiteKing',
            img: 'whiteKing.svg',
            castling: { left: true, right: true },
        },
    },
    { x: 8, y: 6, name: 'f1', piece: { type: 'bishop', color: 'white', name: 'whiteBishopK', img: 'whiteBishop.svg' } },
    { x: 8, y: 7, name: 'g1', piece: { type: 'knight', color: 'white', name: 'whiteKnightK', img: 'whiteKnight.svg' } },
    { x: 8, y: 8, name: 'h1', piece: { type: 'rook', color: 'white', name: 'whiteRookK', img: 'whiteRook.svg' } },
]

export const arrayKnightMoves = [
    { x: -2, y: -1 }, { x: -2, y: 1 },
    { x: 2, y: -1 }, { x: 2, y: 1 },
    { x: -1, y: -2 }, { x: -1, y: 2 },
    { x: 1, y: -2 }, { x: 1, y: 2 },
];

// Поля для перемещения короля
export const arrayCastlingMoves = (x, y) => ({
    right: { x: x, y: y + 2 },
    left: { x: x, y: y - 2 },
})

// Поля которые не должны находится под атакой
export const arrayCastlingAttackCells = (x, y) => ({
    right: { x: x, y: y + 1 },
    left: { x: x, y: y - 1 },
})

// Поля для проверки отсутсвия фигур
export const arrayCastlingCheckCells = (x, y) => ({
    right: [{ x: x, y: y + 1 }, { x: x, y: y + 2 }],
    left: [{ x: x, y: y - 1 }, { x: x, y: y - 2 }, { x: x, y: y - 3 }],
})