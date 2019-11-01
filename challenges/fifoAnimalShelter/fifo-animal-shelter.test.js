'use strict';

let AnimalShelter = require('./fifo-animal-shelter.js');

const dog = {
  species: 'dog',
  legs: 4,
  wags: true,
  swims: true
};
const cat = {
  species: 'cat',
  legs: 4,
  wags: false,
  swims: false
};
const otter = {
  species: 'otter',
  legs: 4,
  wags: true,
  swims: true
};

describe('FIFO animal shelter tests', () => {
  it('Enqueues dogs', () => {
    let as = new AnimalShelter();
    expect(as.enqueue(dog)).toBeTruthy();
  });
  it('Enqueues cats', () => {
    let as = new AnimalShelter();
    expect(as.enqueue(cat)).toBeTruthy();
  });
  it('doesnt Enqueue otters', () => {
    let as = new AnimalShelter();
    expect(as.enqueue(otter)).toBeNull();
  });
  it('Dequeues a cat after many dogs', () => {
    let as = new AnimalShelter();
    as.enqueue(dog);
    as.enqueue(dog);
    as.enqueue(cat);
    as.enqueue(dog);
    expect(as.dequeue('cat').species).toBe('cat');
  });
  it('Dequeues a dog after many cats', () => {
    let as = new AnimalShelter();
    as.enqueue(cat);
    as.enqueue(cat);
    as.enqueue(dog);
    as.enqueue(cat);
    expect(as.dequeue('dog').species).toBe('dog');
  });
  it('throws null when trying to dequeue an otter', () => {
    let as = new AnimalShelter();
    as.enqueue(cat);
    as.enqueue(cat);
    as.enqueue(dog);
    as.enqueue(cat);
    expect(as.dequeue('otter')).toBe(null);
  });
});
