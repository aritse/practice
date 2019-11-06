/* DESCRIPTION
You are give a list of projects and a list of dependencies [which is a pari of projects, where the first project is dependent on the second project]. All of a projects's dependencies must be built before the project. Finda a build order that will allow projects to be built. If there is no valid build order, return an error.
Input:
    Projects: a, b, c, d, e, f
    Dependencies: [d,a], [b,f], [d,b], [a,f], [c,d]
*/

class Graph {
    constructor() {
        this.projects = [];
    }

    toString() {
        return this.projects.reduce((s, project) => s.concat(project.toString(), "\n"), "");
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.prerequisites = [];
        this.visited = false;
        this.completed = false;
    }

    toString() {
        return this.name.concat(": ", this.prerequisites);
    }
}

var indexOf = function (array, name) {
    for (let i = 0; i < array.length; i++)
        if (array[i].name === name)
            return i;
    return -1;
};

var buildOrder = function (names, dependencies) {
    const order = [];
    const graph = new Graph();
    names.forEach(name => graph.projects.push(new Project(name)));
    dependencies.forEach(([name, prerequisite]) => {
        const index = indexOf(graph.projects, name);
        graph.projects[index].prerequisites.push(prerequisite);
    });

    console.log(graph.toString());

    var complete = function (project) {
        const len = project.prerequisites.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                const index = indexOf(graph.projects, project.prerequisites[i]);
                const prerequisite = graph.projects[index];
                if (!prerequisite.completed) complete(prerequisite);
            }
        }
        order.push(project.name);
        project.completed = true;
    };

    graph.projects.forEach(project => {
        if (!project.completed)
            complete(project);
    });

    if (order.length < names.length) throw Error;
    else return order;
};

const projects = ["a", "b", "c", "d", "e", "f"];
const dependencies = [["d", "a"], ["b", "f"], ["d", "b"], ["a", "f"], ["c", "d"]];
console.log(buildOrder(projects, dependencies));