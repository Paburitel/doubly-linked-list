const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        let node = new Node (data), tempNode = this._tail;
        if (this.length) {
            this._tail = node;
            this._tail.prev = tempNode;
            this._tail.prev.next = this._tail;
        } else {
            this._tail = node;
            this._head = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {

        let tempNode = this._head, tempIndex = 0;
        while (tempNode) {
            if (index === tempIndex) { return tempNode.data;}
            tempNode = tempNode.next;
            tempIndex++;
        }
    }

    insertAt(index, data) {
        let tempNode = this._head, tempIndex = 0;
        while (tempNode) {
            if (index === tempIndex) {
                tempNode.data = data;
                break;
            }
            tempNode = tempNode.next;
            tempIndex++;
        }
        return this;
    }

    isEmpty() {
        return this.length ? false : true;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {
        let tempNode = this._head, tempIndex = 0;
        while (tempNode) {
            if (index === tempIndex) {
                if (tempNode.prev) tempNode.prev.next = tempNode.next;
                if (tempNode.next) tempNode.next.prev = tempNode.prev;
                tempNode = null;
                this.length--;
                break;
                }
            tempNode = tempNode.next;
            tempIndex++;
        }
        return this;
    }

    reverse() {
        let tempNode = this._head, tempArrData = [];
        while (tempNode) {
            tempArrData.unshift(tempNode.data);
            tempNode = tempNode.next;
        }
        this.clear();
        let i = 0 , length = tempArrData.length;
        for (; i < length ; i++) {
            this.append(tempArrData[i]);
        }
        return this;
    }

    indexOf(data) {
        let tempNode = this._head, tempIndex = 0;
        while (tempNode) {
            if (tempNode.data === data) {
                return tempIndex;}
            tempNode = tempNode.next;
            tempIndex++;
        }
        return -1;
    }

}

module.exports = LinkedList;
