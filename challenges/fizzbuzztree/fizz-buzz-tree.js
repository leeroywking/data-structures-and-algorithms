'use strict'

function fizzBuzzTree(tree){
    function fizzbuzzer(value){
        if((value % 3 === 0) && (value % 5 === 0)){value = 'FizzBuzz'};
        if((value % 3) === 0){value = 'Fizz'};
        if((value % 5) === 0){value = 'Buzz'}
    };
    current = tree.root;
    function iterate(current){
        if(current.left){iterate(current.left)}
        if(current.right){iterate(current.right)}
        fizzbuzzer(current.value)
    }
    iterate(current);
    return tree;
}

module.export = fizzBuzzTree;