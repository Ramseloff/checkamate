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
    { name: 'lK', x: 8, y: 5, img: 'lK.svg' },
    { name: 'dK', x: 1, y: 5, img: 'dK.svg' },
    { name: 'lQ', x: 8, y: 4, img: 'lQ.svg' },
    { name: 'dQ', x: 1, y: 4, img: 'dQ.svg' },

    { name: 'lRl', x: 8, y: 1, img: 'lR.svg' },
    { name: 'lRr', x: 8, y: 8, img: 'lR.svg' },
    { name: 'dRl', x: 1, y: 1, img: 'dR.svg' },
    { name: 'dRr', x: 1, y: 8, img: 'dR.svg' },

    { name: 'lBl', x: 8, y: 3, img: 'lB.svg' },
    { name: 'lBr', x: 8, y: 6, img: 'lB.svg' },
    { name: 'dBl', x: 1, y: 3, img: 'dB.svg' },
    { name: 'dBr', x: 1, y: 6, img: 'dB.svg' },

    { name: 'lNl', x: 8, y: 2, img: 'lN.svg' },
    { name: 'lNr', x: 8, y: 7, img: 'lN.svg' },
    { name: 'dNl', x: 1, y: 2, img: 'dN.svg' },
    { name: 'dNr', x: 1, y: 7, img: 'dN.svg' },

    { name: 'lP1', x: 7, y: 1, img: 'lP.svg' },
    { name: 'lP2', x: 7, y: 2, img: 'lP.svg' },
    { name: 'lP3', x: 7, y: 3, img: 'lP.svg' },
    { name: 'lP4', x: 7, y: 4, img: 'lP.svg' },
    { name: 'lP5', x: 7, y: 5, img: 'lP.svg' },
    { name: 'lP6', x: 7, y: 6, img: 'lP.svg' },
    { name: 'lP7', x: 7, y: 7, img: 'lP.svg' },
    { name: 'lP8', x: 7, y: 8, img: 'lP.svg' },

    { name: 'dP1', x: 2, y: 1, img: 'dP.svg' },
    { name: 'dP2', x: 2, y: 2, img: 'dP.svg' },
    { name: 'dP3', x: 2, y: 3, img: 'dP.svg' },
    { name: 'dP4', x: 2, y: 4, img: 'dP.svg' },
    { name: 'dP5', x: 2, y: 5, img: 'dP.svg' },
    { name: 'dP6', x: 2, y: 6, img: 'dP.svg' },
    { name: 'dP7', x: 2, y: 7, img: 'dP.svg' },
    { name: 'dP8', x: 2, y: 8, img: 'dP.svg' },
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