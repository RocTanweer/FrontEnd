
i = 1;
s = '';
let w = prompt('Write the width..');
let h = prompt('Write the height..');
while(i <= w*h){
    for(let j = 0 ; j < w/2 ; j ++){
        s += ' ';
        s += '#';
        i += 2;
    }

    s += '\n'
    for(let k = 0 ; k < w/2 ; k ++){
        s += '#';
        s += ' ';
        i += 2;
    }
    s += '\n'

}



console.log(s)
/*
Gives
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/


