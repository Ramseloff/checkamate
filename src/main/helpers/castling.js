// export function castlingMoves(
//     x = 0,
//     y = 0,
//     color = '',
//     pieces = {},
// ) {
//     const arrayMoves = [];
//     const king = pieces.find((item) => item.piece.color === color && item.piece.type === 'king');
//
//     const castlingCells = {
//         right: [{ x: x, y: y + 1 }, { x: x, y: y + 2 }],
//         left: [{ x: x, y: y - 1 }, { x: x, y: y - 2 }, { x: x, y: y - 3 }],
//     }
//
//     const castlingMove = {
//         right: { x: x, y: y + 2 },
//         left: { x: x, y: y - 2 },
//     }
//
//     let castlingPermissionRight = king.piece.castling.right;
//     let castlingPermissionLeft = king.piece.castling.left;
//
//     castlingCells.right.map((i) => {
//         if (pieces.some((item) => (
//             item.x === i.x && item.y === i.y && item.piece.name
//         ))) castlingPermissionRight = false;
//     })
//
//     castlingCells.left.map((i) => {
//         if (pieces.some((item) => (
//             item.x === i.x && item.y === i.y && item.piece.name
//         ))) castlingPermissionLeft = false;
//     })
//
//     if (castlingPermissionRight) arrayMoves.push(castlingMove.right);
//     if (castlingPermissionLeft) arrayMoves.push(castlingMove.left);
//
//
//     return arrayMoves;
// }

// castlingCheckCells.right.map((i) => {
//     if (pieces.some((item) => (
//         item.x === i.x && item.y === i.y && item.piece.name
//     ))) castlingPermissionRight = false;
// })
//
// castlingPermissionRight = checkEnemyPieceMove(castlingAttackCells.right.x, castlingAttackCells.right.y, color, pieces);
//
// castlingCheckCells.left.map((i) => {
//     if (pieces.some((item) => (
//         item.x === i.x && item.y === i.y && item.piece.name
//     ))) castlingPermissionLeft = false;
// })
//
// castlingPermissionLeft = checkEnemyPieceMove(castlingAttackCells.left.x, castlingAttackCells.left.y, color, pieces);