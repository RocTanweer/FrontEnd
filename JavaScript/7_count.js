function countBs(str){
    count = 0;
    for(let i = 0; i < str.length; i ++){
        if(str[i] == 'B'){
            count += 1;
        }
    }
    return count
}


function countChar(str, char){
    count = 0;
    for(let i = 0; i < str.length; i ++){
        if(str[i] == char){
            count += 1;
        }
    }
    return `The number of '${char}' in '${str}' is/are ${count}`
}
