class HashTable {
    constructor() {
        this.table = new Array(10)
        this.size = 0
    }
    hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key, value) {
        const index = this.hash(key)
        this.table[index] = [key, value]
        this.size++;
    }
    get(key) {
        const target = this.hash(key)
        return this.table[target]
    }
    remove(key) {
        const index = this.hash(key)
        if (this.table[index]) {
            const value = this.table[index]
            this.table.splice(this.table.indexOf(value), 1)
        } else {
            return 'The key is not in the hash table'
        }
    }
    output() {
        console.log(this.table)
    }
}

const hash = new HashTable()

hash.set('HELLO', 1)

hash.set('Australia', 2)