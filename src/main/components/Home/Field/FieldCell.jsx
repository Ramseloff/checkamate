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
    return pieces.find((i) => (i.x === x && i.y === y))?.img;
}

function getChildPieces(pieceName) {
    if (pieceName) return <img className='piece' src={'src/images/pieces/' + pieceName} alt=''/>
}


const FieldCell = ({ pieces =[], coordinate = {}, activeCell = {}, onClick = f => f }) => {
    const pieceName = getPieceName(coordinate, pieces);
    const childPieces = getChildPieces(pieceName);


    // function onCheckCell() {
    //
    // }


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