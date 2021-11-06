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
let step = 0

function dfs(start, visited = new Set()) {
    visited.add(start) //[phx, lax, mex, bkk, lim]
    const destinations = adjacencyList.get(start);
    for (const destination of destinations) {

        if (!visited.has(destination)) {
            console.log(destination)
            dfs(destination, visited)
        }
    }
    console.log(visited)
}