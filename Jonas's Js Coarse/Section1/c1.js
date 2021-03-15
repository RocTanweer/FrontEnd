const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const bmiMark = markWeight / (markHeight ** 2);
const bmiJohn = johnWeight / (johnHeight ** 2);

const markHeigherBMI = bmiMark > bmiJohn;

if(markHeigherBMI) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`)
}
else{
    console.log(`Mark's BMI (${bmiMark}) is less than John's (${bmiJohn})`)
}