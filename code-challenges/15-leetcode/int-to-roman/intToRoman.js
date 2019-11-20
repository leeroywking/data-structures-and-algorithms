'use strict'

function intToRoman(int){
    const mapping = {
        1: 'I',
        5: 'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    };
    let output = []
    while(int >= 1000){
        output.push('M')
        int -= 1000
    }
    while(int >= 500){
        output.push('D')
        int -= 500
    }
    while(int >= 100){
        output.push('C')
        int -= 100
    }
    while(int >= 50){
        output.push('L')
        int -= 50
    }
    while(int >= 10){
        output.push('X')
        int -= 10
    }
    while(int >= 5){
        output.push('V')
        int -= 5
    }
    while(int >= 1){
        output.push('I')
        int -= 1
    }
    return output.join('')
}


/*

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

module.exports = intToRoman