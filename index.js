/*
You can make the following assumptions:

●  You can always build a castle at the start of the array, provided it is non-empty
●  We only want to build one castle per peak or valley.
●  A peak is an integer or series of integers that is above the immediately preceding and following ints. 
    For example, in the sequence [2,6,6,6,3] the sequence of three 6s is a peak.

●  A valley is an integer or series of integers that is below the immediately preceding and following ints. 
    For example, in the sequence [6,1,4] the "1" would be a valley. 
*/

function isPeak(previous, current, next){
    if (previous < current && current > next) {
        return true;
    }
    return false;
}
function isValley(previous, current, next){
    if (previous > current && current < next) {
        return true;
    }
    return false;
}

function reducer (accumulator, currentValue, currentIndex, array) {
    const previousValue = array[currentIndex-1];
    const nextValue = array[currentIndex+1];
    
    if (previousValue !== undefined && nextValue !== undefined){
        if (isPeak(previousValue,currentValue,nextValue)) {
            accumulator += 1;
        }
        if (isValley(previousValue,currentValue,nextValue)) {
            accumulator += 1;
        }
    }
    return accumulator;
}

const landscape = [,6,1,,1,,1,4]
const initialValue = (landscape[0] === undefined) ? 0 : 1;
console.log('landscape', landscape)
console.log('initialValue',initialValue);
function landscapeFilter(element, index, array){
    if (index === 0) {
        return true;
    }
    if (index !== 0 && element !== array[index-1]){
        return true
    }
}
const filteredLandscape = landscape.filter(landscapeFilter)
const twiceFilteredLandscape = filteredLandscape.filter(landscapeFilter)
console.log('filteredLandscape', filteredLandscape)
console.log('twiceFilteredLandscape', twiceFilteredLandscape)
const count = twiceFilteredLandscape.reduce(reducer, initialValue);
console.log('count',count);
