import React, { useState } from 'react';
import FieldCell from './FieldCell';
import { css } from 'glamor';
import { field, arrayCastlingMoves } from '../../../config/config';
import { bishopMoves, kingMoves, knightMoves, pawnMoves, queenMoves, rookMoves } from '../../../helpers/moves';

const fieldGrid = (size) => css({
    width: size * 8 + 4,
    border: '2px solid red',
    display: 'grid',
    gridTemplateColumns: `repeat(8, ${size}px)`,
    gridTemplateRows: `repeat(8, ${size}px)`,
})


const Field = () => {
    const [pieces, setPieces] = useState(field);
    const [activeCell, setActiveCell] = useState({})
    const [moveCell, setMoveCell] = useState([]);
    const [round, setRound] = useState('white');
    const [castling, setCastling] = useState({
        white: {
            left: true,
            right: true,
        },
        black: {
            left: true,
            right: true,
        },
    })
    const roundSettings = {
        white: 'black',
        black: 'white',
    }


    const moveRules = {
        pawn: pawnMoves,
        knight: knightMoves,
        rook: rookMoves,
        bishop: bishopMoves,
        queen: queenMoves,
        king: kingMoves,
    }

    function getMoveCell(piece, x, y) {
        const { type, color } = piece;
        const newMove = moveRules[type](x, y, color, pieces);

        setMoveCell(newMove);
    }

    function onClear() {
        setActiveCell({});
        setMoveCell([]);
    }

    function onChangeRound() {
        setRound(roundSettings[round]);
    }

    function onCheckCell(idx) {
        const { x, y, piece } = pieces[idx];
        const validMove = moveCell.some((i) => (i.x === x && i.y === y));

        // if (piece.name && (!activeCell?.piece?.name || !validMove) && piece.color === round) {
        if (piece.name && (!activeCell?.piece?.name || !validMove)) {
            getMoveCell(piece, x, y);
            setActiveCell({ piece, idx, x, y });
        } else if (validMove) {
            const newPieces = pieces;
            const oldPiece = pieces[activeCell.idx];

            newPieces[activeCell.idx].piece = {};
            newPieces[idx].piece = activeCell.piece;

            const piece = newPieces[idx].piece;
            const kingIdx = newPieces.findIndex(
                (item) => item.piece.type === 'king' && item.piece.color === piece.color);
            const rookKIdx = newPieces.findIndex(
                (item) => item.piece.name === piece.color + 'RookK' && item.piece.color === piece.color);
            const rookQIdx = newPieces.findIndex(
                (item) => item.piece.name === piece.color + 'RookQ' && item.piece.color === piece.color);


            if (piece.type === 'king') {
                const oldPieceCastling = arrayCastlingMoves(oldPiece.x, oldPiece.y);
                piece.castling.right = false;
                piece.castling.left = false;

                if (oldPieceCastling.right.x === x && oldPieceCastling.right.y === y)  {
                    newPieces[rookKIdx - 2].piece = newPieces[rookKIdx].piece;
                    newPieces[rookKIdx].piece = {};
                }
                if (oldPieceCastling.left.x === x && oldPieceCastling.left.y === y)  {
                    newPieces[rookQIdx + 3].piece = newPieces[rookQIdx].piece;
                    newPieces[rookQIdx].piece = {};
                }
            }

            if (piece.type === 'rook') {
                if (piece.name === 'whiteRookK') newPieces[kingIdx].piece.castling.right = false;
                if (piece.name === 'whiteRookQ') newPieces[kingIdx].piece.castling.left = false;
            }

            setPieces(newPieces);
            onClear();
            onChangeRound();
        } else {
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