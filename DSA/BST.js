class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = this.root;

        if (!this.root) {
            this.root = new Node(data);
            return
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (!node.left) {
                        node.left = new Node(data)
                    } else {
                        return searchTree(node.left)
                    }
                } else {
                    if (!node.right) {
                        node.right = new Node(data)
                    } else {
                        return searchTree(node.right)
                    }
                }
            }
            return searchTree(node)
        }
    }

    findMax() {
        let node = this.root
        while (node.right) {
            node = node.right
        }
        return node.data
    }
    findMinNode() {
        let node = this.root;
        node = node.left
        const findMin = (node) => {
            if (node.left == null)
                return node
            return findMin(node.left)
        }
        return findMin(node)

    }
    find(data) {
        let node = this.root;
        while (node.data !== data) {
            if (node.data > data) {
                node = node.left
            } else {
                node = node.right
            }
            if (node == null) return null
        }
        return node.data
    }
    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // node has no children 
                if (node.left == null && node.right == null) {
                    return null;
                }
                // node has no left child 
                if (node.left == null) {
                    node = node.right
                    return node
                }
                // node has no right child 
                if (node.right == null) {
                    node = node.left
                    return node
                }
                // node has two children 
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data; //8
                node.right = removeNode(node.right, tempNode.data); //(12, 10)
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data); //(10, 10)
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
    inorderTraversal() {

        let node = this.root;
        const inoder = (node) => {
            inoder(node.left)
            console.log(node.data)
            inoder(node.right)
        }
        return inoder(node)
    }
    preOrderTraversal() {
        let node = this.root;
        const inoder = (node) => {
            console.log(node.data)
            inoder(node.left)

            inoder(node.right)
        }
        return inoder(node)
    }
    postOrderTravesal() {
        const inoder = (node) => {

            inoder(node.left)
            inoder(node.right)
            console.log(node.data)
        }
        return inoder(node)
    }
    findMaxDepth(node = this.root) {
        if (node == null) {
            return -1
        } else {
            let lDepth = this.findMaxDepth(node.left)
            let rDepth = this.findMaxDepth(node.right)
            return (lDepth > rDepth) ? lDepth + 1 : rDepth + 1
        }
    }
}

const bst = new BST();
bst.insert(20);
bst.insert(8);
bst.insert(4);
bst.insert(12);

bst.insert(14);


bst.insert(21);

console.log(bst.findMaxDepth())


/*      
      
        
    
    10 

   5      42 
             
  4    6    12    



       10 

   6     21
             
  4     12 42  
*/