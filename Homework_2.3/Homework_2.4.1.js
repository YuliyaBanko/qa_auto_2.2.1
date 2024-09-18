

let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];   

let expectedResult = [40590, 148200, 214499]

function calculateExpences(expencesArray) {
    let sum = 0;
    for(monthExpences of expencesArray) {
        if (monthExpences > 1000) { 
        sum += monthExpences;}
    }
        return sum;
}
    
console.log(calculateExpences(expencesExamples[1].yearlyExpences))


function testingExpences(expectedResult,expencesArray) {
    let actualResult = calculateExpences(expencesArray)
    if(actualResult === expectedResult) {
        console.log(`correct`)
    } else {
        console.log(`incorrect`)
    }
}

expencesExamples.forEach((expencesEx, index) => {
    testingExpences(expectedResult[index], expencesEx.yearlyExpences)
})