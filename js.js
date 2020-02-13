'use strict';

function miniMaxSum(key, s) {

    let k = key%26;

    let sArr =  s.split('');

    let code = [];
    sArr.forEach(c => {
        code.push(c.charCodeAt(0));
    });

    let NumCode  = [];  
    code.forEach(ch => {
        let findNum = ch;
        console.log(findNum);
        if(ch >= 65 && ch <= 90 ) {
            if(ch + k >= 90)
                findNum = ((ch + k) - 90 + 64)
            else 
                findNum = ch+k;
        }
        else if(ch >= 97 && ch <= 122 ) {
            if(ch + k > 122)
                findNum = ((ch + k) - 122 + 96)
            else 
                findNum = ch+k;
        }

        NumCode.push(String.fromCharCode(findNum));
    });

    
    console.log(sArr);
    console.log(code);
    console.log(NumCode);
    
    return NumCode.join('')

    z


    
}

console.log(miniMaxSum(45,'DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy'));
console.log('WGYcqh?u5a*5<EPuzl6?O5{3F].1aZ)io1OPj4(!][WS3Z)kbLC.VfNc9]7Zse?OrxC2wBIXP4ZRP*lvM8(oan9pVk]j!7xrthr');