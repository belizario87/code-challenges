/*
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

var humanYearsCatYearsDogYears = function(humanYears) {
    const catYearsTwoOrMoreYears = 15;
    const dogYearsTwoMoreYears = 15;
    
    
    if(humanYears > 2) {
        return [humanYears, catYearsTwoOrMoreYears + 9 + (humanYears - 2) * 4, dogYearsTwoMoreYears + 9 + (humanYears - 2) * 5 ]
    } 

    if(humanYears === 2) {
        return [humanYears, catYearsTwoOrMoreYears + 9 , dogYearsTwoMoreYears + 9 ]
    }

    return [humanYears, catYearsTwoOrMoreYears, dogYearsTwoMoreYears]
        
}

console.log(humanYearsCatYearsDogYears(10));






