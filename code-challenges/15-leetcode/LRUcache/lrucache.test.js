'use strict'
let LRUcache = require('./lrucache.js')

describe('LRU cache tests', () => {
    it('passes testcase 1', () => {
        let lrucache = new LRUcache(2);
        lrucache.put(1,1);
        lrucache.put(2,2);
        let firstget = lrucache.get(1)
        expect(firstget).toEqual(1)
    })
    it('passes testcase 2', () => {
        let lrucache = new LRUcache(2);
        lrucache.put(1,1);
        lrucache.put(2,2);
        lrucache.get(1)
        lrucache.put(3,3);
        let secondget = lrucache.get(2);
        expect(secondget).toEqual(-1)
    })
})

/*
["LRUCache","put","put","get","put","get","put","get","get","get"]
[   [2],    [1,1],[2,2], [1], [3,3], [2],  [4,4],[1],  [3], [4]]
[  null,    null, null,  1,   null,  -1,   null, -1    ,3,   4]

*/