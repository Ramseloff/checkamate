import React from 'react';

function getColor(coordinate) {
    const { x, y } = coordinate;
    if ( x % 2 !== 0 && y % 2 !== 0 || x % 2 === 0 && y % 2 === 0 ) return 'white';
    if ( x % 2 !== 0 && y % 2 === 0 || x % 2 === 0 && y % 2 !== 0 ) return 'black';
}

function checkActive(coordinate, activeCell) {
    return (coordinate.x === activeCell.x && coordinate.y === activeCell.y) ? 'active' : ''
}

function getPieceName(coordinate, pieces = []) {
    const { x, y } = coordinate;
    return pieces.find((i) => (i.x === x && i.y === y))?.name;
}

function getChildPieces(pieces, coordinate) {
    const pieceName = getPieceName(coordinate, pieces)
    if (pieceName) return <img className='piece' src={'src/images/pieces/' + pieceName + '.svg'} alt=''/>
}


const FieldCell = ({ pieces =[], coordinate = {}, activeCell = {}, onClick = f => f }) => {
    const childPieces = getChildPieces(pieces, coordinate);

    const classes = ['cell'];
    classes.push(getColor(coordinate));
    classes.push(checkActive(coordinate, activeCell));

    return (
        <>
            <div className={classes.join(' ')} onClick={onClick}>{childPieces}</div>
        </>
    );
};

export default FieldCell;