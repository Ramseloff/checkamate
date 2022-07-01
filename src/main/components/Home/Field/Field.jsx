import React, { useState } from 'react';
import FieldCell from './FieldCell';
import { css } from 'glamor';
import { field } from '../../../config/config';
import { bishopMoves, kingMoves, knightMoves, pawnMoves, queenMoves, rookMoves } from '../../../helpers/moves';

const fieldGrid = (size) => css({
    width: size * 8 + 4,
    border: '2px solid red',
    display: 'grid',
    gridTemplateColumns: `repeat(8, ${size}px)`,
    gridTemplateRows: `repeat(8, ${size}px)`,
})


const Field = () => {
    const [activeCell, setActiveCell] = useState({})
    const [moveCell, setMoveCell] = useState([]);

    const [pieces, setPieces] = useState(field);

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

    function onCheckCell(idx) {
        const { x, y, piece } = pieces[idx];
        const validMove = moveCell.some((i) => (i.x === x && i.y === y));

        if (piece.name && (!activeCell?.piece?.name || !validMove)) {
            getMoveCell(piece, x, y);
            setActiveCell({ piece, idx });
        } else if (validMove) {
            const newPieces = pieces;
            newPieces[activeCell.idx].piece = {};
            newPieces[idx].piece = activeCell.piece;
            setPieces(newPieces);
            onClear();
        }
    }

    console.log(moveCell, activeCell);
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