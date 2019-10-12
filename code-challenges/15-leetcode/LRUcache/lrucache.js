/**
 * @param {number} capacity
 */
class LRUCache{
    constructor(capacity){
        this.map = new Map(),
        this.queue = [],
        this.capacity = capacity
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let thing = this.map.get(key)
    if(thing === undefined){return -1}
    else{return thing}
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.queue.length === this.capacity){
        let removed = this.queue.pop();
        this.map.delete(removed)
    }
    this.map.set(key,value);
    this.queue.push(key);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 module.exports = LRUCache