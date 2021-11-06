const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// The graph
const adjacencyList = new Map();

// Add node
function addNode(airportList) {
    for (let i = 0; i < airportList.length; i++) {
        adjacencyList.set(airportList[i], [])
    }
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
addNode(airports)
routes.forEach(route => addEdge(...route))

function bfs(start) {
    const visited = new Set();
    const queue = [start]
    while (queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport)
        for (const destination of destinations) {
            if (destination == 'PHX') {
                console.log('FOUND ' + start)
                return;
            }
            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }
        }
    }
}

function bfs_maxtrix(graph, start) {
    let queue = [start] //[2]
    let visited = [start] //[2]
    while (queue.length > 0) {
        let index = queue.shift() //0

        for (let i = 0; i < graph[index].length; i++) {
            let currentIndex = 0;
            if (graph[index][i] == 1) {
                currentIndex = i; //1
                if (visited.indexOf(currentIndex) == -1) {
                    queue.push(currentIndex) //[1, 3, 1, 2]
                    visited.push(currentIndex) //[2, 0, 1, 3]

                }
            }
        }

    }
    return visited
}



function bfs_shortestpath(edges, start, destination) {
    const graph = buildPath(edges)
    let queue = [
        [start, 0]
    ]
    let visited = new Set(start)
    while (queue.length > 0) {
        const [node, distance] = queue.shift()
        if (node == destination) return distance
        for (const myGraph of graph[node]) {
            if (!visited.has(myGraph)) {
                visited.add(myGraph)
                queue.push([myGraph, distance + 1])
            }
        }
    }
    return -1
}

//queue [c, 1, e, 2, ]

function buildPath(edges) {
    const objPath = {}
    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in objPath)) objPath[a] = []
        if (!(b in objPath)) objPath[b] = []
        objPath[a].push(b)
        objPath[b].push(a)
    }

    return objPath
}

const edge = [
    ['c', 'n'],
    ['c', 'e'],
    ['c', 's'],
    ['c', 'w'],
    ['w', 'e'],
];
console.log(bfs_shortestpath(edge, 'w', 'e'))




/*{

    w: [x, v]
    x: [y]
    z: [y, v]
}*/