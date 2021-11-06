class Queue {
    constructor() {
        this.arr = []

    }
    enqueue(data) {
        this.arr.unshift(data)
    }
    dequeue() {
        this.arr.pop()
    }
    length() {
        return this.arr.length;
    }
    peek() {
        return this.arr[0]
    }
    isEmpty() {
        return this.arr.length == 0
    }
    getQueue() {
        return this.arr
    }
}

function PriorityQueue() {
    let arr = []
    this.enqueue = (data) => {
        if (arr.length == 0) {
            arr.push(data)
        } else {
            let added = false
            for (let i = 0; i < arr.length; i++) {
                if (data[1] < arr[i][1]) {
                    arr.splice(i, 0, data) //arr.splice(0, 0, [josh, 3])
                    added = true
                    break;
                }
            }
            if (!added) {
                arr.push(data)
            }
        }
    }
    this.output = () => {
        return arr;
    }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(['Brian', 2])
priorityQueue.enqueue(['Josh', 3])
priorityQueue.enqueue(['Mike', 3])
priorityQueue.enqueue(['Chris', 1])
priorityQueue.enqueue(['Meek', 2])


console.log(priorityQueue.output())

/*[ 
    ['Brian', 2],

    ['Mike', 3],

    ['Chris', 5]
]
*/