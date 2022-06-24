import React, { useState } from 'react';
import FieldCell from './FieldCell';
import { css } from 'glamor';

const vertical = [8, 7, 6, 5, 4, 3, 2, 1];
const horizontal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const fieldGrid = (size) => css({
    width: size * 8 + 4,
    border: '2px solid red',
    display: 'grid',
    gridTemplateColumns: `repeat(8, ${size}px)`,
    gridTemplateRows: `repeat(8, ${size}px)`,
})

const defaultPieces = [
    { name: 'lK', x: 8, y: 5 },
    { name: 'dK', x: 1, y: 5 },
    { name: 'lQ', x: 8, y: 4 },
    { name: 'dQ', x: 1, y: 4 },
]


const Field = () => {
    const [activeCell, setActiveCell] = useState('')
    const [pieces, setPieces] = useState(defaultPieces);

    function onClick(active = '') {
        const coordinate = active.split('_');
        const coordinateActive = { x: Number(coordinate[0]), y: Number(coordinate[1]) }
        console.log(coordinateActive);
        setActiveCell(coordinateActive);
    }


    return (
        <>
            <div>
                <div className={fieldGrid(100)}>
                    {horizontal.map((ix, idx) => {
                        return vertical.map((iy, idy) => {
                            const cellCoordinate = { x: idx + 1, y: idy + 1 };
                            return (
                                <FieldCell
                                    key={ix + iy}
                                    pieces={pieces}
                                    activeCell={activeCell}
                                    coordinate={cellCoordinate}
                                    onClick={() => onClick((idx + 1) + '_' + (idy + 1))}
                                />
                            )
                        })
                    })}
                </div>
            </div>
        </>
    );
};

export default Field;