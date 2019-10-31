/* DESCRIPTION
Given a directed graph, design an algorithm to find out whether there is route between two nodes.
*/

/**
 * 
 * @param {Graph} graph - directed graph
 * @param {number} start - value of start node 
 * @param {number} end - value of end node
 * @returns {boolean}
 */
var routeExistsBFS = function (graph, start, end) {
    const queue = [];
    let node = graph.nodes[start];
    node.visited = true;
    queue.push(node);
    while (queue.length > 0) {
        node = queue.shift();
        if (node.value === end) return true;

        node.children.forEach(i => {
            const child = graph.nodes[i];
            if (!child.visited) {
                child.visited = true;
                queue.push(child);
            }
        });
    }
    return false;
};

/**
 * 
 * @param {Graph} graph - directed graph
 * @param {number} start - value of start node 
 * @param {number} end - value of end node
 * @returns {boolean}
 */
var routeExistsDFS = function (graph, start, end) {
    if (start === end) return true;
    const node = graph.nodes[start];
    node.visited = true;
    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (!graph.nodes[child].visited && routeExistsDFS(graph, child, end))
            return true;
    }
    return false;
}

class Node {
    constructor(value, children, visited = false) {
        this.value = value;
        this.children = Array.from(children);
        this.visited = visited;
    }
}

class Graph {
    constructor(adjList) {
        this.nodes = Array(adjList.length);
        for (let i = 0; i < adjList.length; i++)
            this.nodes[i] = new Node(i, adjList[i]);
    }
}

const adjList = [[1], [2], [0, 3], [2], [6], [4], [5]];
const graph = new Graph(adjList);
const [start, end] = [0, 6];
// console.log("BFS traversal: ", routeExistsBFS(graph, start, end));
console.log("DFS traversal: ", routeExistsDFS(graph, start, end));

/*
QUESTIONS
Does the function determine a route between given two nodes? Yes.
The route from start to end? Yes, not the other way around.
Does the function determine if the graph is a connected graph? No.
*/
