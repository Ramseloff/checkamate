import React, { useState } from 'react';
import FieldCell from './FieldCell';
import { css } from 'glamor';


const field = [
    { x: 1, y: 1, name: 'a8', piece: { type: 'rook', color: 'black', name: 'blackRook', img: 'blackRook.svg' } },
    { x: 1, y: 2, name: 'b8', piece: { type: 'knight', color: 'black', name: 'blackKnight', img: 'blackKnight.svg' } },
    { x: 1, y: 3, name: 'c8', piece: { type: 'bishop', color: 'black', name: 'blackBishop', img: 'blackBishop.svg' } },
    { x: 1, y: 4, name: 'd8', piece: { type: 'queen', color: 'black', name: 'blackQueen', img: 'blackQueen.svg' } },
    { x: 1, y: 5, name: 'e8', piece: { type: 'king', color: 'black', name: 'blackKing', img: 'blackKing.svg' } },
    { x: 1, y: 6, name: 'f8', piece: { type: 'bishop', color: 'black', name: 'blackBishop', img: 'blackBishop.svg' } },
    { x: 1, y: 7, name: 'g8', piece: { type: 'knight', color: 'black', name: 'blackKnight', img: 'blackKnight.svg' } },
    { x: 1, y: 8, name: 'h8', piece: { type: 'rook', color: 'black', name: 'blackRook', img: 'blackRook.svg' } },

    { x: 2, y: 1, name: 'a7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },
    { x: 2, y: 2, name: 'b7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },
    { x: 2, y: 3, name: 'c7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },
    { x: 2, y: 4, name: 'd7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },
    { x: 2, y: 5, name: 'e7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },
    { x: 2, y: 6, name: 'f7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },
    { x: 2, y: 7, name: 'g7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },
    { x: 2, y: 8, name: 'h7', piece: { type: 'pawn', color: 'black', name: 'blackPawn', img: 'blackPawn.svg' } },

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

    { x: 7, y: 1, name: 'a2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },
    { x: 7, y: 2, name: 'b2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },
    { x: 7, y: 3, name: 'c2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },
    { x: 7, y: 4, name: 'd2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },
    { x: 7, y: 5, name: 'e2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },
    { x: 7, y: 6, name: 'f2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },
    { x: 7, y: 7, name: 'g2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },
    { x: 7, y: 8, name: 'h2', piece: { type: 'pawn', color: 'white', name: 'whitePawn', img: 'whitePawn.svg' } },

    { x: 8, y: 1, name: 'a1', piece: { type: 'rook', color: 'white', name: 'whiteRook', img: 'whiteRook.svg' } },
    { x: 8, y: 2, name: 'b1', piece: { type: 'knight', color: 'white', name: 'whiteKnight', img: 'whiteKnight.svg' } },
    { x: 8, y: 3, name: 'c1', piece: { type: 'bishop', color: 'white', name: 'whiteBishop', img: 'whiteBishop.svg' } },
    { x: 8, y: 4, name: 'd1', piece: { type: 'queen', color: 'white', name: 'whiteQueen', img: 'whiteQueen.svg' } },
    { x: 8, y: 5, name: 'e1', piece: { type: 'king', color: 'white', name: 'whiteKing', img: 'whiteKing.svg' } },
    { x: 8, y: 6, name: 'f1', piece: { type: 'bishop', color: 'white', name: 'whiteBishop', img: 'whiteBishop.svg' } },
    { x: 8, y: 7, name: 'g1', piece: { type: 'knight', color: 'white', name: 'whiteKnight', img: 'whiteKnight.svg' } },
    { x: 8, y: 8, name: 'h1', piece: { type: 'rook', color: 'white', name: 'whiteRook', img: 'whiteRook.svg' } },
]

const fieldGrid = (size) => css({
    width: size * 8 + 4,
    border: '2px solid red',
    display: 'grid',
    gridTemplateColumns: `repeat(8, ${size}px)`,
    gridTemplateRows: `repeat(8, ${size}px)`,
})

const defaultPieces = [
    { type: 'king', color: 'white', position: '', name: 'whiteKing', x: 8, y: 5, img: 'whiteKing.svg' },
    { type: 'king', color: 'black', position: '', name: 'blackKing', x: 1, y: 5, img: 'blackKing.svg' },
    { type: 'queen', color: 'white', position: '', name: 'whiteQueen', x: 8, y: 4, img: 'whiteQueen.svg' },
    { type: 'queen', color: '', position: '', name: 'blackQueen', x: 1, y: 4, img: 'blackQueen.svg' },

    { type: 'rook', color: 'white', position: '', name: 'whiteRook', x: 8, y: 1, img: 'whiteRook.svg' },
    { type: 'rook', color: 'white', position: '', name: 'whiteRook', x: 8, y: 8, img: 'whiteRook.svg' },
    { type: 'rook', color: 'black', position: '', name: 'blackRook', x: 1, y: 1, img: 'blackRook.svg' },
    { type: 'rook', color: 'black', position: '', name: 'blackRook', x: 1, y: 8, img: 'blackRook.svg' },

    { type: 'bishop', color: 'white', position: 'left', name: 'whiteBishop', x: 8, y: 3, img: 'whiteBishop.svg' },
    { type: 'bishop', color: 'white', position: 'right', name: 'whiteBishop', x: 8, y: 6, img: 'whiteBishop.svg' },
    { type: 'bishop', color: 'black', position: 'left', name: 'blackBishop', x: 1, y: 3, img: 'blackBishop.svg' },
    { type: 'bishop', color: 'black', position: 'right', name: 'blackBishop', x: 1, y: 6, img: 'blackBishop.svg' },

    { type: 'knight', color: 'white', position: 'left', name: 'whiteKnight', x: 8, y: 2, img: 'whiteKnight.svg' },
    { type: 'knight', color: 'white', position: 'right', name: 'whiteKnight', x: 8, y: 7, img: 'whiteKnight.svg' },
    { type: 'knight', color: 'black', position: 'left', name: 'blackKnight', x: 1, y: 2, img: 'blackKnight.svg' },
    { type: 'knight', color: 'black', position: 'right', name: 'blackKnight', x: 1, y: 7, img: 'blackKnight.svg' },

    { type: 'pawn', color: 'white', position: '1', name: 'whitePawn', x: 7, y: 1, img: 'whitePawn.svg' },
    { type: 'pawn', color: 'white', position: '2', name: 'whitePawn', x: 7, y: 2, img: 'whitePawn.svg' },
    { type: 'pawn', color: 'white', position: '3', name: 'whitePawn', x: 7, y: 3, img: 'whitePawn.svg' },
    { type: 'pawn', color: 'white', position: '4', name: 'whitePawn', x: 7, y: 4, img: 'whitePawn.svg' },
    { type: 'pawn', color: 'white', position: '5', name: 'whitePawn', x: 7, y: 5, img: 'whitePawn.svg' },
    { type: 'pawn', color: 'white', position: '6', name: 'whitePawn', x: 7, y: 6, img: 'whitePawn.svg' },
    { type: 'pawn', color: 'white', position: '7', name: 'whitePawn', x: 7, y: 7, img: 'whitePawn.svg' },
    { type: 'pawn', color: 'white', position: '8', name: 'whitePawn', x: 7, y: 8, img: 'whitePawn.svg' },

    { type: 'pawn', color: 'black', position: '1', name: 'blackPawn', x: 2, y: 1, img: 'blackPawn.svg' },
    { type: 'pawn', color: 'black', position: '2', name: 'blackPawn', x: 2, y: 2, img: 'blackPawn.svg' },
    { type: 'pawn', color: 'black', position: '3', name: 'blackPawn', x: 2, y: 3, img: 'blackPawn.svg' },
    { type: 'pawn', color: 'black', position: '4', name: 'blackPawn', x: 2, y: 4, img: 'blackPawn.svg' },
    { type: 'pawn', color: 'black', position: '5', name: 'blackPawn', x: 2, y: 5, img: 'blackPawn.svg' },
    { type: 'pawn', color: 'black', position: '6', name: 'blackPawn', x: 2, y: 6, img: 'blackPawn.svg' },
    { type: 'pawn', color: 'black', position: '7', name: 'blackPawn', x: 2, y: 7, img: 'blackPawn.svg' },
    { type: 'pawn', color: 'black', position: '8', name: 'blackPawn', x: 2, y: 8, img: 'blackPawn.svg' },
];


const bishopMoves = () => {
    const arrayMoves = [];
    for (let x = -7; x < 8; x++) {
        for (let y = -7; y < 8; y++) {
            if (Math.abs(x) === Math.abs(y) && x !== 0 && y !== 0) arrayMoves.push({ x, y });
        }
    }
    return arrayMoves;
}

const rookMoves = () => {
    const arrayMoves = [];
    for (let x = -7; x < 8; x++) {
        for (let y = -7; y < 8; y++) {
            if ((x === 0 && y !== 0) || (x !== 0 && y === 0)) arrayMoves.push({ x, y });
        }
    }
    return arrayMoves;
}

const queenMoves = () => {
    const arrayMoves = [];
    for (let x = -7; x < 8; x++) {
        for (let y = -7; y < 8; y++) {
            if ((x === 0 && y !== 0) || (x !== 0 && y === 0) || (Math.abs(x) === Math.abs(y))) arrayMoves.push({
                x,
                y,
            });
        }
    }
    return arrayMoves;
}




const Field = () => {
    const [activeCell, setActiveCell] = useState({})
    const [activeAddCell, setAddActiveCell] = useState({})
    const [moveCell, setMoveCell] = useState([]);

    const [pieces, setPieces] = useState(defaultPieces);

    const moveRules = {
        pawn: {
            white: [
                { x: -1, y: 0 }, { x: -2, y: 0 },
                { x: -1, y: -1 }, { x: -1, y: 1 },
            ],
            black: [
                { x: 1, y: 0 }, { x: 2, y: 0 },
                { x: 1, y: -1 }, { x: 1, y: 1 },
            ],
        },
        knight: [
            { x: -2, y: -1 }, { x: -2, y: 1 },
            { x: 2, y: -1 }, { x: 2, y: 1 },
            { x: -1, y: -2 }, { x: -1, y: 2 },
            { x: 1, y: -2 }, { x: 1, y: 2 },
        ],
        bishop: bishopMoves(),
        rook: rookMoves(),
        queen: queenMoves(),
        king: [
            { x: 1, y: 1 }, { x: 1, y: -1 },
            { x: -1, y: 1 }, { x: -1, y: -1 },
            { x: 0, y: 1 }, { x: 0, y: -1 },
            { x: 1, y: 0 }, { x: -1, y: 0 },
        ],
    }

    const moveRulesTest = {
        knight: () => {

        }

    }


    function onClick(piece, idx) {

        setActiveCell({ piece, idx });
    }

    function getMoveCell(piece, x, y) {
        const { type, color } = piece
        const newMove = (type === 'pawn')
            ? moveRules[type][color].map(i => ({ x: x + i.x, y: y + i.y }))
            : moveRules[type].map(i => ({ x: x + i.x, y: y + i.y }));

        const checkedMove = newMove.filter((i) => field.some(
            (item) => (item.x === i.x && item.y === i.y && (
                !item.piece.hasOwnProperty('name') || color !== item.piece.color
            )),
        ));


        console.log(checkedMove);
        setMoveCell(checkedMove);
    }


    function onClear() {
        setActiveCell({});
        setMoveCell([]);
    }

    function onCheckCell(idx) {
        const { x, y, piece } = field[idx];

        if (piece.name) {
            getMoveCell(piece, x, y);
            onClick(piece, idx);
        } else if (moveCell.length) {
            const validMove = moveCell.some((i) => (i.x === x && i.y === y));

            if (validMove) {
                const newField = field;
                newField[activeCell.idx].piece = {};
                newField[idx].piece = activeCell.piece;
                setPieces(newField)
            }
            onClear();
        }
    }


    // console.log(moveCell, activeCell);
    return (
        <>
            <div>
                <div className={fieldGrid(100)}>
                    {field.map((i, idx) => {
                        const cellCoordinate = { x: i.x, y: i.y };
                        return (
                            <FieldCell
                                key={idx}
                                piece={i.piece}
                                activeCell={activeCell}
                                moveCell={moveCell}
                                coordinate={cellCoordinate}
                                onClick={() => onCheckCell(idx)}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Field;


// const vertical = [8, 7, 6, 5, 4, 3, 2, 1];
// const horizontal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

{/*{horizontal.map((ix, idx) => {*/
}
{/*    return vertical.map((iy, idy) => {*/
}
{/*        const cellCoordinate = { x: idx + 1, y: idy + 1 };*/
}
{/*        return (*/
}
{/*            <FieldCell*/
}
{/*                key={ix + iy}*/
}
{/*                pieces={pieces}*/
}
{/*                activeCell={activeCell}*/
}
{/*                moveCell={moveCell}*/
}
{/*                coordinate={cellCoordinate}*/
}
{/*                onClick={() => onCheckCell(cellCoordinate)}*/
}
{/*            />*/
}
{/*        )*/
}
{/*    })*/
}
{/*})}*/
}

// const defaultPieces_2 = {
//     whiteKing: { type: 'king', color: 'white', position: '', name: 'whiteKing', x: 8, y: 5, img: 'whiteKing.svg' },
//     blackKing: { type: 'king', color: 'black', position: '', name: 'blackKing', x: 1, y: 5, img: 'blackKing.svg' },
//
//     whiteQueen: { type: 'queen', color: 'white', position: '', name: 'whiteQueen', x: 8, y: 4, img: 'whiteQueen.svg' },
//     blackQueen: { type: 'queen', color: 'black', position: '', name: 'blackQueen', x: 1, y: 4, img: 'blackQueen.svg' },
//
//     whiteBishopLeft: {
//         type: 'bishop',
//         color: 'white',
//         position: 'left',
//         name: 'whiteBishop',
//         x: 8,
//         y: 3,
//         img: 'whiteBishop.svg',
//     },
//     whiteBishopRight: {
//         type: 'bishop',
//         color: 'white',
//         position: 'right',
//         name: 'whiteBishop',
//         x: 8,
//         y: 6,
//         img: 'whiteBishop.svg',
//     },
//     blackBishopLeft: {
//         type: 'bishop',
//         color: 'black',
//         position: 'left',
//         name: 'blackBishop',
//         x: 1,
//         y: 3,
//         img: 'blackBishop.svg',
//     },
//     blackBishopRight: {
//         type: 'bishop',
//         color: 'black',
//         position: 'right',
//         name: 'blackBishop',
//         x: 1,
//         y: 6,
//         img: 'blackBishop.svg',
//     },
//
//     whiteKnightLeft: {
//         type: 'knight',
//         color: 'white',
//         position: 'left',
//         name: 'whiteKnight',
//         x: 8,
//         y: 2,
//         img: 'whiteKnight.svg',
//     },
//     whiteKnightRight: {
//         type: 'knight',
//         color: 'white',
//         position: 'right',
//         name: 'whiteKnight',
//         x: 8,
//         y: 7,
//         img: 'whiteKnight.svg',
//     },
//     blackKnightLeft: {
//         type: 'knight',
//         color: 'black',
//         position: 'left',
//         name: 'blackKnight',
//         x: 1,
//         y: 2,
//         img: 'blackKnight.svg',
//     },
//     blackKnightRight: {
//         type: 'knight',
//         color: 'black',
//         position: 'right',
//         name: 'blackKnight',
//         x: 1,
//         y: 7,
//         img: 'blackKnight.svg',
//     },
//
//     whiteRookLeft: { type: 'rook', color: 'white', position: '', name: 'whiteRook', x: 8, y: 1, img: 'whiteRook.svg' },
//     whiteRookRight: { type: 'rook', color: 'white', position: '', name: 'whiteRook', x: 8, y: 8, img: 'whiteRook.svg' },
//     blackRookLeft: { type: 'rook', color: 'black', position: '', name: 'blackRook', x: 1, y: 1, img: 'blackRook.svg' },
//     blackRookRight: { type: 'rook', color: 'black', position: '', name: 'blackRook', x: 1, y: 8, img: 'blackRook.svg' },
//
//     whitePawn1: { type: 'pawn', color: 'white', position: '1', name: 'whitePawn', x: 7, y: 1, img: 'whitePawn.svg' },
//     whitePawn2: { type: 'pawn', color: 'white', position: '2', name: 'whitePawn', x: 7, y: 2, img: 'whitePawn.svg' },
//     whitePawn3: { type: 'pawn', color: 'white', position: '3', name: 'whitePawn', x: 7, y: 3, img: 'whitePawn.svg' },
//     whitePawn4: { type: 'pawn', color: 'white', position: '4', name: 'whitePawn', x: 7, y: 4, img: 'whitePawn.svg' },
//     whitePawn5: { type: 'pawn', color: 'white', position: '5', name: 'whitePawn', x: 7, y: 5, img: 'whitePawn.svg' },
//     whitePawn6: { type: 'pawn', color: 'white', position: '6', name: 'whitePawn', x: 7, y: 6, img: 'whitePawn.svg' },
//     whitePawn7: { type: 'pawn', color: 'white', position: '7', name: 'whitePawn', x: 7, y: 7, img: 'whitePawn.svg' },
//     whitePawn8: { type: 'pawn', color: 'white', position: '8', name: 'whitePawn', x: 7, y: 8, img: 'whitePawn.svg' },
//
//     blackPawn1: { type: 'pawn', color: 'black', position: '1', name: 'blackPawn', x: 2, y: 1, img: 'blackPawn.svg' },
//     blackPawn2: { type: 'pawn', color: 'black', position: '2', name: 'blackPawn', x: 2, y: 2, img: 'blackPawn.svg' },
//     blackPawn3: { type: 'pawn', color: 'black', position: '3', name: 'blackPawn', x: 2, y: 3, img: 'blackPawn.svg' },
//     blackPawn4: { type: 'pawn', color: 'black', position: '4', name: 'blackPawn', x: 2, y: 4, img: 'blackPawn.svg' },
//     blackPawn5: { type: 'pawn', color: 'black', position: '5', name: 'blackPawn', x: 2, y: 5, img: 'blackPawn.svg' },
//     blackPawn6: { type: 'pawn', color: 'black', position: '6', name: 'blackPawn', x: 2, y: 6, img: 'blackPawn.svg' },
//     blackPawn7: { type: 'pawn', color: 'black', position: '7', name: 'blackPawn', x: 2, y: 7, img: 'blackPawn.svg' },
//     blackPawn8: { type: 'pawn', color: 'black', position: '8', name: 'blackPawn', x: 2, y: 8, img: 'blackPawn.svg' },
//
// }