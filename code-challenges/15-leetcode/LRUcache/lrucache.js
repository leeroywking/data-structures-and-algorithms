/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.map = new Map(),
      this.queue = [],
      this.capacity = capacity
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let thing = this.map.get(key);
  if (thing === undefined) { return -1 }
  else {
    this.reindex(key)
    return thing
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.queue.length === this.capacity) {
    let removed = this.queue.shift();
    this.map.delete(removed)
  }
  this.map.set(key, value);
  this.queue.push(key);
};

LRUCache.prototype.reindex = function(key){
  // takes in a key that is definitely in the queue
  // store start of queue
  let start = this.queue[0]
  // remove key from queue
  console.log(start, this.queue, this.map)
  while(this.queue[0] !== key){
    console.log('shifting', this.queue[0])
    this.queue.push(queue.shift())
  }
  this.queue.shift()
  // get the start of the queue back at the beginning
  while(this.queue[0] !== start){
    this.queue.push(this.queue.shift())
  }
  // add the key back to the end of the queue
  this.queue.push(key)
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache