/* DESCRIPTION
Given a directed graph, design an algorithm to find out whether there is route between two nodes.
*/

/**
 * 
 * @param {Graph} graph 
 * @param {number} start 
 * @param {number} end 
 * @returns {boolean}
 */
var routeExists = function (graph, s, e) {
    const queue = [];
    const [start, end] = [graph.nodes[s], graph.nodes[e]];

    start.visited = Status[1];
    queue.push(start);
    while (queue.length > 0) {
        const node = queue.shift();
        if (node.value === end.value) {
            return true;
        }
        for (let i = 0; i < node.children.length; i++) {
            const child = graph.nodes[node.children[i]];
            if (child.visited === Status[0]) {
                child.visited = Status[1];
                queue.push(child);
            }
        }
        node.visited = Status[2];
    }
    return false;
};

const Status = {
    0: 'not visited',
    1: "visiting",
    2: "visited"
}

class Node {
    constructor(value, children, visited = Status[0]) {
        this.value = value;
        this.children = Array.from(children);
        this.visited = visited;
    }
}

class Graph {
    constructor(adjacencyList) {
        this.nodes = Array(adjacencyList.length);
        for (let i = 0; i < adjacencyList.length; i++)
            this.nodes[i] = new Node(i, adjacencyList[i]);
    }
}

const adjacencyList = [[1], [2], [0, 3], [2], [6], [4], [5]];
const graph = new Graph(adjacencyList);
const [start, end] = [3, 6];

console.log(routeExists(graph, start, end));

/*
QUESTIONS
Does the function determine a route between given two nodes? Yes.
The route from start to end? Yes.
Does the function determine if the graph is a connected graph? No.
*/