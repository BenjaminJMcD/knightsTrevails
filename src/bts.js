

// CREATE ADJACENCY LIST USING MATRIX GRID NUMBERS

export function createAdjList() {
    let adjList = [];

    for (let i=0; i<64; i++) {

        let node = adjList[i] = [];

        let lt = i+6;
        if (lt < 64 && i%8 !=0 && i%8 != 1) {
            node.push(lt);
        }
        let tl = i+15;
        if (tl < 64 && i%8 != 0) {
            node.push(tl);
        }
        let tr = i+17;
        if (tr < 64 && i%8 !=7) {
            node.push(tr);
        }
        let rt = i+10;
        if (rt < 64 && i%8 !=7 && i%8 != 6) {
            node.push(rt);
        }
        let rb = i-6;
        if (rb > 0 && i%8 !=7 && i%8 != 6) {
            node.push(rb);
        }
        let br = i-15;
        if (br > 0 && i%8 != 7) {
            node.push(br);
        }
        let bl = i-17;
        if (bl > 0 && i%8 != 0) {
            node.push(bl);
        }
        let lb = i-10;
        if (lb > 0 && i%8 !=0 && i%8 != 1) {
            node.push(lb);
        }
    }
    return adjList
}



// FUNCTION TO CONVERT COORD TO MATRIX#

export function convertToMatrix(coord) {
    let matrixNum = coord[0] + 8*coord[1];
    return matrixNum;
}

// FUNCTION TO CONVERT MATRIX# TO COORD

export function convertToCoord(matrix) {
    let coord = [];
    let x = matrix%8;
    let y = Math.floor(matrix/8);
    coord.push(x,y);
    return coord;
}

let adjList = createAdjList();


export function knightMoves(coord1, coord2) {

    let startPos = convertToMatrix(coord1);
    let endPos = convertToMatrix(coord2);

    let queue = [[startPos]];
    let visited = [];
    
    while (queue.length) {
        let path = queue.shift();
        let pos = path[path.length-1];
    
        visited.push(pos);
    
        if (pos == endPos) {
            return path;
        }
    
        let moves = adjList[pos];
    
        moves.forEach((move) => {
            if (!visited.includes(move)) {
                queue.push([...path, move])
            }
        })
    }
}

