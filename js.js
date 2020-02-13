'use strict';
function birthday(s, d, m) {

    if(s.length == 1 && s[0] ==  d)
        return 1

    let count = 0;

    for(let i = 0 ; i < s.length; i++) {
        let list = s.slice()
        let arr = list.slice(i, i+m)
        let sum = 0;
        arr.forEach(el => {
            sum += el;
        });

        if(sum == d)
            count += 1;
    }
       
    return count;

}



console.log(birthday([1,2,1,3,2], 3, 2 ));