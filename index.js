// Code your solution in this file!
const returnFirstTwoDrivers = firstTwo =>{
    return firstTwo.slice(0, 2);
}  
 const returnLastTwoDrivers = lastTwo =>{
    return lastTwo.slice(-2)
 }
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];
 function createFareMultiplier(x){
    return function(fare){
        return fare * x;
    }
 }
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers , selectFunction)=>{
    return selectFunction(drivers);
}

