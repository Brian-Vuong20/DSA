class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    length() {
        return this.size
    }
    add(data) {
        let node = new Node(data)
        if (this.head == null) {
            this.head = node
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.size++;
    }

    remove(data) {
        let currentNode = this.head;
        let previousNode = null

        //1 -> 2 -> 3 -> 4
        if (currentNode.data == data) {
            currentNode = currentNode.next
        }
        while (currentNode.data !== data) {
            previousNode = currentNode //2
            currentNode = currentNode.next //3
        }
        previousNode.next = currentNode.next
        this.size--;
    }
    elementAt(index) {
        let currentNode = this.head;
        let currentIndex = 0
        while (currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.next
        }
        return currentNode.data;
    }
    insertAt(index, data) {
        let currentNode = this.head;
        let previousNode = null
        let currentIndex = 0
        while (currentIndex < index) {
            currentIndex++
            previousNode = currentNode
            currentNode = currentNode.next
        }
        let node = new Node(data)
        previousNode.next = node
        node.next = currentNode
    }
    sumNode() {
        let sum = 0
        let currentNode = this.head
        while (currentNode.next) {
            sum += currentNode.data
            currentNode = currentNode.next
        }

        console.log(sum)
    }
    outputList() {
        let currentNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(currentNode.data)
    }
}

const linklist = new LinkedList();
linklist.add(5)
linklist.add(6)
linklist.add(7)
linklist.add(8)
linklist.add(9)

console.log(linklist.remove(7))


//5 -> 6 -> 7 -> 8 -> 9

linklist.outputList()