

export class Node {
    constructor(coord) {
        this.coord = coord;
        this.matrix = matrix;
        this.lt = null;
        this.tl = null;
        this.tr = null;
        this.rt = null;
        this.rb = null;
        this.br = null;
        this.bl = null;
        this.lb = null;
    }

    // lt = [-2, +1]
    // tl = [-1. +2]
    // tr = [+1, +2]
    // rt = [+2, +1]
    // rb = [+2, -1]
    // br = [+1, -2]
    // bl = [-1, -2]
    // lb = [-2, -1]

    createNode(coord) {

        let xminus1 = coord[0]-1;
        let xminus2 = coord[0]-2;
        let xplus1 = coord[0]+1;
        let xplus2 = coord[0]+2;
        let yminus1 = coord[1]-1;
        let yminus2 = coord[1]-2;
        let yplus1 = coord[1]+1;
        let yplus2 = coord[1]+2;
        
        this.lt = [xminus2, yplus1];
        this.tl = [xminus1, yplus2];
        this.tl = [xplus1, yplus2];
        this.rt = [xplus2, yplus1];
        this.rb = [xplus2, yminus1];
        this.br = [xplus1, yminus2];
        this.bl = [xminus1, yminus2];
        this.lb = [xminus2, yminus1];

    }
}

// CREATING TREE... if coord[0] or coord[1] >7 or <0 == null

// HOW TO STOP IF SINGLE PATH ALREADY HAS COORD ?!?!?!?! 
// YET ALLOW OTHER PATHS TO HAVE SAME COORD 

export class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(array, 0, array.length-1); 
    }

    buildTree(array, start, end) {
        
        //if (start > end) {
        //    return null;
        //}
        
        //let mid = Math.floor((start + end)/2);

        //let node = new Node(array[mid]);

        // node.left = this.buildTree(array, start, mid-1);
        // node.right = this.buildTree(array, mid+1, end);

        // TAKES IN ORIGINATING COORDINATE.
        // 

        return node;
    }

}


// adjacency list w 64 spots
// function to convert coord to graph/index number

// Y=0 = X COORD
// Y=1 = X COORD + 8
// y=2 = X COORD + 16

// +8-2 , +16-1, +16+1, +8+2, -8+2, -16+1, -16-1, -8-2
//   +6,    +15,   +17,  +10,  -6,   -15.   -17,   -10

// MATRIX# == X + Y*8

function createAdjList() {
    let adjList = [];

    for (let i=0; i<64; i++) {
        let lt = i+6;
        let tl = i+15;
        let tr = i+17;
        let rt = i+10;
        let rb = i-6;
        let br = i-15;
        let bl = i-17;
        let lb = i-10;

    }
}

// FROM 0 to 63, take that number +/- the 8. if between 0 63 push to arr[i]



// FUNCTION TO CONVERT COORD TO MATRIX#
// FUNCTION TO CONVERT MATRIX# TO COORD

// FUNCTIONS TO CREATE LT TL TR RT RB BR BL LB CONNECTIONS

// SEARCH ARR[MATRIX#] FOR TARGET
// IF EXISTS, BREAK
// IF NULL, RETURN
// PUSH MATRIX# TO STEP ARRAY
// RECURSE FOR ALL IN ARR[MATRIX#] ARRAY

function convertToMatrix(coord) {

    let matrixNum = coord[0] + 8*coord[1];

    return matrixNum;

}

function convertToCoord(matrix) {

    coord = [];
    let x = matrix%8;
    let y = Math.floor(matrix/8);

    return coord[x,y];

}




