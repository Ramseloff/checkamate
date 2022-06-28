import React from 'react';
import Piece from './Piece';

function getColor(coordinate) {
    const { x, y } = coordinate;
    if ( x % 2 !== 0 && y % 2 !== 0 || x % 2 === 0 && y % 2 === 0 ) return 'white';
    if ( x % 2 !== 0 && y % 2 === 0 || x % 2 === 0 && y % 2 !== 0 ) return 'black';
}

function checkActive(coordinate, activeCell) {
    return (coordinate.x === activeCell.x && coordinate.y === activeCell.y) ? 'active' : ''
}

function checkMove(coordinate, moveCell) {
    return moveCell.find(i => i.x === coordinate.x && i.y === coordinate.y) ? 'move' : ''
}



const FieldCell = ({ piece = {}, coordinate = {}, activeCell = {}, moveCell= [], onClick = f => f }) => {


    // function onCheckCell() {
    //
    // }


    const classes = ['cell'];
    classes.push(getColor(coordinate));
    classes.push(checkActive(coordinate, activeCell));
    classes.push(checkMove(coordinate, moveCell));

    return (
        <>
            <div className={classes.join(' ')} onClick={onClick}>
                <Piece
                    coordinate={coordinate}
                    piece={piece}
                />
            </div>
        </>
    );
};

export default FieldCell;