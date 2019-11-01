/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    (this.map = new Map()), (this.queue = []), (this.capacity = capacity);
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let value = this.map.get(key);
  if (value === undefined) {
    return -1;
  } else {
    this.reindex(key);
    return value;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.get(key)) {
    this.reindex(key);
  } else if (this.queue.length === this.capacity) {
    let removed = this.queue.shift();
    this.map.delete(removed);
    this.queue.push(key);
  }

  this.map.set(key, value);
};

LRUCache.prototype.reindex = function(key) {
  // takes in a key that is definitely in the queue
  // store start of queue
  let start = this.queue[0];
  // remove key from queue
  if (start === key) {
    this.queue.push(this.queue.shift());
    return;
  }
  // console.log(start, this.queue, this.map)
  while (this.queue[0] !== key) {
    // console.log('shifting', this.queue[0])
    this.queue.push(this.queue.shift());
  }
  this.queue.shift();
  // get the start of the queue back at the beginning
  while (this.queue[0] !== start) {
    this.queue.push(this.queue.shift());
  }
  // add the key back to the end of the queue
  this.queue.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;
