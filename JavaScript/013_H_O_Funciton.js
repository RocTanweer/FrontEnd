// Collatz Sequence-- >> It states that for any natural number taken, dividing it by 2 if it is even and, multiplying it
// by 3 and adding 1,if it is odd, then after certain steps we will get '1' no matter how big the number we take.
// Lets make a program to find the collatz sequence 
// I will use higher order function and Abstraction concept


function action(n) {
    if(n % 2 == 0){
        return n/2
    }

    else{
        return 3 * n + 1
    }
}


function find_CS(num){
    while(true){
        result = action(num);

        if(result == 1){
            console.log(result)
            break
        }

        else{
            console.log(result)
            num = result;
        }
    }
}

console.log(find_CS(30));