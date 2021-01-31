var ANCESTRY_FILE = JSON.stringify([
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
])


// Making an object of this dataset
let ancestory = JSON.parse(ANCESTRY_FILE);



// lets make a function to find the average
function average(array, func) {
    let reduced = array[0];
    for (let i = 1; i < array.length; i++) {
        reduced = func(array[i], reduced);
    }

    return reduced / array.length
}



// This is a function to assign a century to a person
// by using their year of death

function asignCentury(element){
    return Math.ceil(element.died/100)
}

// console.log(asignCentury(ancestory[0]))
function groupBy(array, func){
    let groupedBy = {};
    for(let i = 0; i < array.length; i++){
        let centuryNumber = func(array[i]);        
        if(centuryNumber == 1){
            if(groupedBy['firstCent'] == undefined){
                groupedBy['firstCent'] = [];
                groupedBy['firstCent'].push(array[i]);
            }

            else{
                groupedBy['firstCent'].push(array[i]);
            }
        }

        else if(centuryNumber == 2){
            if (groupedBy['secondCent'] == undefined) {
                groupedBy['secondCent'] = [];
                groupedBy['secondCent'].push(array[i]);
            }

            else {
                groupedBy['secondCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 3) {
            if (groupedBy['thirdCent'] == undefined) {
                groupedBy['thirdCent'] = [];
                groupedBy['thirdCent'].push(array[i]);
            }

            else {
                groupedBy['thirdCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 4) {
            if (groupedBy['fourthCent'] == undefined) {
                groupedBy['fourthCent'] = [];
                groupedBy['fourthCent'].push(array[i]);
            }

            else {
                groupedBy['fourthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 5) {
            if (groupedBy['fifthCent'] == undefined) {
                groupedBy['fifthtCent'] = [];
                groupedBy['fifthCent'].push(array[i]);
            }

            else {
                groupedBy['fifthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 6) {
            if (groupedBy['sixthCent'] == undefined) {
                groupedBy['sixthCent'] = [];
                groupedBy['sixthCent'].push(array[i]);
            }

            else {
                groupedBy['sixthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 7) {
            if (groupedBy['seventhCent'] == undefined) {
                groupedBy['seventhCent'] = [];
                groupedBy['seventhCent'].push(array[i]);
            }

            else {
                groupedBy['seventhCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 8) {
            if (groupedBy['eigthCent'] == undefined) {
                groupedBy['eigthCent'] = [];
                groupedBy['eigthCent'].push(array[i]);
            }

            else {
                groupedBy['eigthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 9) {
            if (groupedBy['ninthCent'] == undefined) {
                groupedBy['ninthCent'] = [];
                groupedBy['ninthCent'].push(array[i]);
            }

            else {
                groupedBy['ninthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 10) {
            if (groupedBy['tenthCent'] == undefined) {
                groupedBy['tenthCent'] = [];
                groupedBy['tenthCent'].push(array[i]);
            }

            else {
                groupedBy['tenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 11) {
            if (groupedBy['eleventhCent'] == undefined) {
                groupedBy['eleventhCent'] = [];
                groupedBy['eleventhCent'].push(array[i]);
            }

            else {
                groupedBy['eleventhCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 12) {
            if (groupedBy['twelthCent'] == undefined) {
                groupedBy['twelthCent'] = [];
                groupedBy['twelthCent'].push(array[i]);
            }

            else {
                groupedBy['twelthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 13) {
            if (groupedBy['thirteenthCent'] == undefined) {
                groupedBy['thirteenthCent'] = [];
                groupedBy['thirteenthCent'].push(array[i]);
            }

            else {
                groupedBy['thirteenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 14) {
            if (groupedBy['fourteenthCent'] == undefined) {
                groupedBy['fourteenthCent'] = [];
                groupedBy['fourteenthCent'].push(array[i]);
            }

            else {
                groupedBy['fourteenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 15) {
            if (groupedBy['fifteenthCent'] == undefined) {
                groupedBy['fifteenthCent'] = [];
                groupedBy['fifteenthCent'].push(array[i]);
            }

            else {
                groupedBy['fifteenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 16) {
            if (groupedBy['sixteenthCent'] == undefined) {
                groupedBy['sixteenthCent'] = [];
                groupedBy['sixteenthCent'].push(array[i]);
            }

            else {
                groupedBy['sixteenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 17) {
            if (groupedBy['seventeenthCent'] == undefined) {
                groupedBy['seventeenthCent'] = [];
                groupedBy['seventeenthCent'].push(array[i]);
            }

            else {
                groupedBy['seventeenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 18) {
            if (groupedBy['eighteenthCent'] == undefined) {
                groupedBy['eighteenthCent'] = [];
                groupedBy['eighteenthCent'].push(array[i]);
            }

            else {
                groupedBy['eighteenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 19) {
            if (groupedBy['ninteenthCent'] == undefined) {
                groupedBy['ninteenthCent'] = [];
                groupedBy['ninteenthCent'].push(array[i]);
            }

            else {
                groupedBy['ninteenthCent'].push(array[i]);
            }
        }

        else if (centuryNumber == 20) {
            if (groupedBy['twenteenthCent'] == undefined) {
                groupedBy['twenteenthCent'] = [];
                groupedBy['twenteenthCent'].push(array[i]);
            }

            else {
                groupedBy['twenteenthCent'].push(array[i]);
        }
    }
        else{
            if (groupedBy['twentyfirstCent'] == undefined) {
                groupedBy['twentyfirstCent'] = [];
                groupedBy['twentyfirstCent'].push(array[i]);
            }

            else {
                groupedBy['twentyfirstCent'].push(array[i]);
            }
        }
    }

    return groupedBy
}


// These are grouped people mapped with corrresponding century name
let groupedPeople = groupBy(ancestory, asignCentury);
console.log(groupedPeople)



// to find the age of an element
function age(element) {
    return element.died - element.born
}


function avAgePerCent(object, func){
    let avAgePerCentury = {};
    for([key, value] of Object.entries(object)){
        let avArr = [];
        for(let j = 0; j < value.length; j++){
            avArr.push(age(value[j]));
        }
        let aveOfThisCent = func(avArr, function (first, second){
            return second + first;
        });

        avAgePerCentury[key] = aveOfThisCent;

    }

    return avAgePerCentury
}

console.log(avAgePerCent(groupedPeople, average))