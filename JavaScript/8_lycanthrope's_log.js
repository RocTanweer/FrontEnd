/*
1. Jacques is a weresquirrel
2. He wishes to get rid of this trait and wanted to find out what triggers this transition
3. He decided to make a log of his everyday activity
4. He uses Js to keep track of his data 
5. He then uses that data to make a 2x2 table 
6. He uses that table to find correlation(phi)
7. phi ranges from -1 to +1
8. 0 mean not related and 1 mean true(related) and -1 mean (opposite relation) i.e false 
*/

// He recorded the data like this daily

let journal = [];
function addEntry(events, squirrel){
    journal.push({events , squirrel});
}


addEntry(['pizza', 'peanut', 'park'], true);
console.log(journal)   
// gives an array of first day log

// This is the data that jacques logged for 3 months

let JOURNAL = [
    { "events": ["carrot", "exercise", "weekend"], "squirrel": false },
    { "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false },
    { "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["cauliflower", "reading", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["spaghetti", "nachos", "work"], "squirrel": false },
    { "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true },
    { "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false },
    { "events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false },
    { "events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "ice cream", "computer", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work"], "squirrel": false },
    { "events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false },
    { "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "work"], "squirrel": false },
    { "events": ["pizza", "beer", "work", "dentist"], "squirrel": false },
    { "events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false },
    { "events": ["lasagna", "peanuts", "work"], "squirrel": true },
    { "events": ["pizza", "work"], "squirrel": false },
    { "events": ["potatoes", "exercise", "work"], "squirrel": false },
    { "events": ["brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["pizza", "cycling", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "candy", "work"], "squirrel": true },
    { "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false },
    { "events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false },
    { "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "candy", "work"], "squirrel": false },
    { "events": ["potatoes", "nachos", "work"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brussel sprouts", "running", "work"], "squirrel": false },
    { "events": ["brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["candy", "brushed teeth", "work"], "squirrel": false },
    { "events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false },
    { "events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false },
    { "events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "work"], "squirrel": false },
    { "events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true },
    { "events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false },
    { "events": ["brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false },
    { "events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false },
    { "events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["carrot", "reading", "weekend"], "squirrel": false },
    { "events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true },
    { "events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false },
    { "events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false },
    { "events": ["lettuce", "brushed teeth", "work"], "squirrel": false },
    { "events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false },
    { "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false }
];


// here we will make a table which will take any single event and correlate it with squirrel variable to find the correlation(phi)
// Since it's gonna be a 2x2 table then each of its element is 00, 01, 10 and 11 which can be interpreted as binary 
// 0 -- false and 1 -- true ------------  00 -> (squirrel:false event:empty/false)
// Since they are four in table we will make array of 4 element to indicate those table elements


// This function will check weather an event exists in an entry
function hasEvent(event, entry){
    return entry.events.indexOf(event) != -1
}


// This function will give a table in the form of an array in analogy with statistics for correlation phi formula
// The position of elements in array is from interpreting the table element's position as row column into binary [00, 01, 10, 11]
// 0 -> false for squirrel and empty event, 1 -> true for squirrel and event exists
function table(event , journal){
    var arr_table = [0, 0, 0, 0];
    for(let i = 0; i < journal.length; i ++){
        var entry = journal[i] ,index = 0;
        if(journal[i].squirrel){
            index += 2;
        }
        if(hasEvent(event, entry)){
            
            index += 1;
        }

        arr_table[index] += 1;
    }

    return arr_table
}

let tbl = table('bread', JOURNAL);
console.log(tbl)
// gives an array table of bread event with squirrelification 



// Now we will write a statistical formula in js form 
// That formula is to find the correlation(phi)
// This function will find the correlation
function phi(table){
    return ((table[3] * table[0]) - (table[2] * table[1]))/
        Math.sqrt(
            (table[2] + table[3]) * (table[0] +  table[1]) *
            (table[1] + table[3]) * (table[0] + table[2])
        )
}
console.log(phi(tbl))
// gives phi(correlation) of bread event with squirellification


// Now we know how to find a correlation of a single event after finding its array table and using that phi formula
// Now we will find an array of all the events to loop over to find phi of all the events
// This function will give an array of all the events uniquely
function allEvents(journal){
    var dict = {};
    for(let entry of journal){
        for(let event of entry.events){
            dict[event] = true;
        }
        }  
        var allEvents = [];
        for(let key of Object.keys(dict)){
            allEvents.push(key);
    }

    return allEvents
    
}

console.log(allEvents(JOURNAL));
// Gives an array of all the events 


// Now we can loop over array of all events and find the phi of all events
// This function will find the phi of all the events
function allPhi(){
    var phis = {};
    for(let event of allEvents(JOURNAL)){
        phis[event] = phi(table(event, JOURNAL));
        console.log(`${event} : ${phis[event]}`)
    }

    return phis
}

allPhi()
// Gives phi of all the events



// Now jacques need to find the cause of squirellification using the date he stored and manipulated
// After doing some random throw he discovered that eating peanut has greater afftect and also of brushed teeth in negative value



// This function will add a new event in JOURNAL.entry.events array 
function newEvent(journal){
    for(let entry of journal){
        if(hasEvent('peanuts', entry) && !hasEvent('brushed teeth', entry)){
            entry.events.push('peanut teeth');
        }
    }
}

newEvent(JOURNAL)
// This will add new event

console.log(phi(table('peanut teeth', JOURNAL)))





