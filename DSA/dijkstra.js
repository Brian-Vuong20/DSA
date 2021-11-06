let V = 9

function checkMin(dist, visited_vertex) {
    let min = Number.MAX_VALUE
    let min_index = -1

    for (let i = 0; i < V; i++) {
        if (visited_vertex[i] == false && dist[i] <= min) {
            min = dist[i]
            min_index = i;
        }
    }
    return min_index
}

function dijkstra(graphs, node_start) {
    let dist = new Array(graphs.length)
    let visited_vertex = new Array(graphs.length)

    for (let i = 0; i < graphs.length; i++) {
        dist[i] = Infinity
        visited_vertex[i] = false
    }

    dist[node_start] = 0



    for (let i = 0; i < graphs.length; i++) {
        let find_min = checkMin(dist, visited_vertex)
        visited_vertex[find_min] = true
        for (let j = 0; j < graphs.length; j++) {

            if (visited_vertex[j] == false && dist[find_min] + graphs[find_min][j] <= dist[j] &&

                graph[find_min][j] !== 0) {
                dist[j] = graph[find_min][j] + dist[find_min]

            }
        }

    }
    return dist
}


let graph = [
    [0, 1, 2, 0, 0],
    [1, 0, 2, 0, 5],
    [2, 3, 0, 5, 1],
    [0, 0, 2, 0, 0],
    [0, 4, 1, 0, 0]
]

console.log(dijkstra(graph, 0))