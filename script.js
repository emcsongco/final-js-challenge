// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
// isNumberPositive(-1); // returns false
// isNumberPositive(10); // returns true

const isNumberPositive = (inputNumber) => {
    let positiveNumberCheck;
    if (inputNumber >= 0) {
        return positiveNumberCheck = true;
    } else {
        return positiveNumberCheck = false;
        }
}
 console.log (isNumberPositive(-1));
 console.log (isNumberPositive(10));

// Write a function that takes a number of days and converts it into an age.
// convertDaysToAge(3650); // returns 10
// convertDaysToAge(6570); // returns 18

const convertDaysToAge = (inputNumberOfDays) => {
    let equivalentAge;
    return equivalentAge = inputNumberOfDays / 365;
}

console.log (convertDaysToAge (3650));
console.log (convertDaysToAge (6570));

// Write a function that takes three numbers and returns the largest of the three numbers.
// getLargestNumber(2 ,1, 4); // returns 4
// getLargestNumber(6,2,3); // returns 6

const getLargestNumber = (firstNumber, secondNumber, thirdNumber) => {
    let largestNumber;
    if (firstNumber > secondNumber) {
        if (firstNumber >= thirdNumber) {
            return largestNumber = firstNumber;
        } else if (firstNumber < thirdNumber) {
            return largestNumber =thirdNumber;
    }
    } else if (secondNumber > firstNumber) {
        if (secondNumber >= thirdNumber) {
            return largestNumber = secondNumber;
        } else if (secondNumber < thirdNumber) {
            return largestNumber = thirdNumber;
        }
    } else if (thirdNumber > firstNumber) {
        if (thirdNumber >= secondNumber) {
            return largestNumber = thirdNumber;
        } else if (thirdNumber < secondNumber) {
            return largestNumber = secondNumber;
        }   
    }
}

console.log (getLargestNumber(2,1,4));
console.log (getLargestNumber(6,2,3));

// Write a function that takes an array of names and returns the last name from the array of names.
// getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
// getLastName(["Ash","Stu"]); // returns "Stu"

// Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
// allNumbersPositive([2,4,5]); // returns true
// allNumbersPositive([-5,4,6]); // returns false