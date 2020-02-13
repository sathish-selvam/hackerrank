'use strict';

function breakingRecords(scores) {


    let max = [scores[0]];
    let min = [scores[0]];

    

    scores.forEach(el => {
        console.log(el);
        if(el > max[max.length-1])
            max.push(el);

        if(el < min[min.length-1])
            min.push(el);
    })  

    return [max.length - 1, min.length - 1 ]
}


console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));