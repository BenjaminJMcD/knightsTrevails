
// FUNCTION TO CREATE ADJACENCY LIST USING MATRIX GRID NUMBERS
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
        if (tr < 64 && i%8 != 7) {
            node.push(tr);
        }
        let rt = i+10;
        if (rt < 64 && i%8 != 7 && i%8 != 6) {
            node.push(rt);
        }
        let rb = i-6;
        if (rb > 0 && i%8 != 7 && i%8 != 6) {
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
        if (lb > 0 && i%8 != 0 && i%8 != 1) {
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

// INITIALIZE ADJACENCY LIST
let adjList = createAdjList();

export function knightMoves(coord1, coord2) {

    let startPos = convertToMatrix(coord1);
    let endPos = convertToMatrix(coord2);

    // INITIALIZE QUEUE W STARTING POSITION
    let queue = [[startPos]];
    // KEEP TRACK OF VISITED SPOTS SO NO DUPLICATES
    let visited = [];
    
    while (queue.length) {
        
        // PATH = FIRST IN QUEUE
        let path = queue.shift();

        // LAST IN PATH = POSITION TO CHECK MOVES
        let pos = path[path.length-1];

        // ADD POSITION TO VISITED ARRAY
        visited.push(pos);
    
        // IF CUURENT POSITION IS TARGET, PRINT TO CONSOLE AND END WHILE LOOP
        if (pos == endPos) {
            let numberMoves = path.length-1;
            let coords = [];
            path.forEach((move) => {
                coords.push(convertToCoord(move));
            });
            console.log(`It took ${numberMoves} moves to get from starting point to target:`);
            coords.forEach((move) => {
                console.log(move);
            });
            break;
        }
    
        // ARRAY OF POSSIBLE MOVES FOR POSITION
        let moves = adjList[pos];
    
        moves.forEach((move) => {
            // IF POSSIBLE MOVES HAVENT BEEN VISITED, MAINTAIN PATH AND ADD MOVE IN LAST POSITION OF PATH TO CHECK FOR MORE MOVES
            if (!visited.includes(move)) {
                queue.push([...path, move])
            }
        })

    }
 
}

