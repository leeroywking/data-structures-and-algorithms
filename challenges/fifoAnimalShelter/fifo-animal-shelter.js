'use strict'

let Q = require('../../datastructures/queue/queue.js');

class AnimalShelter{
    constructor(){
        this.dogQ = new Q;
        this.catQ = new Q;
    };
    enqueue(animal){
        if(animal.species === 'dog'){
            this.dogQ.enqueue(animal);
            return true
        }
        if(animal.species === 'cat'){
            this.catQ.enqueue(animal);
            return true
        }
        else{return null};
    };
    dequeue(pref){
        if(pref === 'dog'){
            return this.dogQ.dequeue();
        }
        if(pref === 'cat'){
            return this.catQ.dequeue();
        }
        else{return null};
    };
}

module.exports = AnimalShelter;