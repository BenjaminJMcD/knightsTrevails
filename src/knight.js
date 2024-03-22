
// use graph similar to a binary tree.
// coord = node [x,y] 

// knightMoves takes in 2 arrays (coords) and returns printed list of arrays as shortest path(s)

// decide which search algorithm - one can be infinite
//  preorder, postorder, inorder, levelorder

// --> shortest path between 2 nodes

// each search creates binary tree...... find shortest branch to specified leaf node



function knightMoves(coord1, coord2) {
    
};

edgeList = [
    // 64 arrays (x,y) - 00, 01, 02, 03, 04. 05, 06, 07, 10, 11, 12, 13, 14, 15, 16, 17

    // ALL FUCKED. X THEN Y TRY AGAIN

    // 00 - [--  --  12, 21  --  --  --  --]
    // 01 - [--  02, 22, 31  --  --  --  --]
    // 02 - [01, 12, 32, 41  --  --  --  --]
    // 03 - [11, 22, 42, 51  --  --  --  --]
    // 04 - [21, 32, 52, 61  --  --  --  --]
    // 05 - [31, 42, 62, 71  --  --  --  --]
    // 06 - [41, 52, --  --  --  --  --  --]
    // 07 - [51, 62  --  --  --  --  --  --]

    // 10 - [--  --  13, 22, 20  --  --  --]
    // 11 - [--  03, 23, 34, 30  --  --  --]
    // 12 - [02, 13, 33, 42, 40  --  --  --]
    // 13 - []
    // 14 - []
    // 15 - []
    // 16 - []
    // 17 - []
]

//       ALWAYS [X , Y] !!!!!!!!!!!!!!

// lt = [-2, +1]
// tl = [-1. +2]
// tr = [+1, +2]
// rt = [+2, +1]
// rb = [+2, -1]
// br = [+1, -2]
// bl = [-1, -2]
// lb = [-2, -1]

// SINGLE THREAD ---- NODES CANNOT REPEAT