import React from 'react';



const Piece = ({ piece = [] }) => {

    return (
        <>
            {piece?.img && (
                <img className='piece' src={'src/images/pieces/' + piece.img} alt=''/>
            )}
        </>
    )
}

export default Piece;