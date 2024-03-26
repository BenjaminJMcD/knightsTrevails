import { convertToCoord } from "./bts";
import { convertToMatrix } from "./bts";
import { createAdjList } from "./bts";
import { knightMoves } from "./bts";


console.log(createAdjList());


let shortestPath = knightMoves([7,7], [2,4]);
console.log(shortestPath)