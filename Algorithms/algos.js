// Create a function that accepts 2 parameters x and y. This function should print 
// out the product of both numbers (x * y), the quotient of both numbers (x/y), 
// the sum of both numbers (x + y), and the difference of both numbers (x-y).

//1. Create a function that accepts 2 parameters (numbers)
//2. Inside of the function handle the math
//3. Calculate the product, quotent, sum and difference of x and y. Print those values out

function maths(x,y){
    console.log("Product:", (x * y))
    console.log("Quotent:", (x / y))
    console.log("Sum:", (x + y))
    console.log("Difference:", (x - y))
}
// maths(10,5)

//Create a program that calculates the product off all of the numbers from 1 to 5 (1*2*3*4*5). 
//The final product for this program should be 120. (This does not have to be a function). 
//Hint: Use a for loop that starts from 1 to 5. Where are you going to save the product? ​

let product = 1

for(let number = 1 ; number <= 5; number++){
    product *= number
}

// console.log(product)

//Find the Average: Create a function that accepts an array as a parameter and calculates 
//the sum of all the numbers in the array. Afterwards return that sum divided by the 
//number of values in the array. Given [1,2,3,4,5], return 3. Hint: Use a for loop that 
//starts from 0 to array.length. Where are you going to save the sum?

//1. Create a function with 1 parameter (array)
//2. Create a variable to store the sum. sum = 0
//3. Create a for loop that iterates through the array
//4. Inside the for loop add to the sum. sum += current-value-in-array
//5. return the average. Sum / Length of array

function findAverage(array){
    let sum = 0

    for(let i = 0;i<array.length;i++){
        sum += array[i]
    }

    let average_value = sum / array.length
    
    return average_value
}

// console.log(findAverage([1,2,3]))

//Create a function that accepts a string of 1’s and 0’s and 
//returns a count of all of the 1’s in that string. Example: Given 
//“1001011” return 4. Hint: Remember that strings are just an array of characters 
//that can’t be altered. 

// Create a function that accepts a string as a parameter
// Create a variable called count and set it equal 0
// Create a for loop that starts at 0 and ends at string.length - 1
// Inside the for loop we'll keep track of the count of all of the 1's in the string
// return the count

function countOnes(string){
    let count = 0

    for(let i = 0;i<string.length;i++){
        if(string[i] == '1'){
            count++
        }
    }

    return count
}

// console.log(countOnes("1001011"))

//Create a function that accepts a string of 1’s and 0’s and returns a 
//new string where all of the 1's are replaced by 2's. Example: Given 
//“1001011” return "2002022". Hint: Remember that strings are just an 
//array of characters that can’t be altered. So you will have to create a 
//new string from scratch and use that as your return string. No built in functions 
//unless they are absolutely necessary.

//1.Create a function that accepts a string as a parameter
//2.Create an variable called output and set it equal to an empty string
//3.Create a for loop that starts at 0 and ends at string.length - 1
//4.Inside the for loop add an if to check for 1's if a 1 is encountered then we
// will add a 2 to the output string otherwise a 0 will be added 
// 5. return the output string

// function replaceOnes(string){
//     let output = ""

//     for(let  i = 0;i<string.length;i++){
//         if(string[i] == '1'){
//             output += "2"
//         }else{
//             output += string[i]
//         }
//     }

//     return output
// }

// console.log(replaceOnes("1001011"))

//Given an array of numbers create a function that returns the maximum value 
//in that array. Given [2,3,1,5,4] return 5. Hint:What is the initial max value?​

//1. Create a function that accepts an array
//2. Set initial max value to the first element in the input array
//3. Iterate through the array. Check to see if the current number at the 
// current index is greater than the current max
//4. If it is greater then re assign the max value
//5. return the max

function findMax(array){
    let max = array[0]

    for(let i = 0;i<array.length;i++){
        if(array[i] > max){
            max = array[i]
        }
    }

    return max
}

// console.log(findMax([2,3,1,4]))

//Given an array of numbers create a function that returns the minimum value 
//in that array. Given [2,3,1,5,4] return 1. Hint:What is the initial min value?​


//1. Create a function that accepts an array
//2. Set initial minimum value to the first element in the input array
//3. Iterate through the array. Check to see if the current number at the 
// current index is less than the current minimum
//4. If it is less then re assign the min value
//5. return the min

function findMin(array){
    let min = array[0]

    for(let i = 0;i<array.length;i++){
        if(array[i] < min){
            min = array[i]
        }
    }

    return min
}

// console.log("Min:",findMin([2,3,4]))

// Count Non-Spaces. Create a function that accepts a string and returns the number of 
// non-space characters found in the string. For example, given ”lol cool dude", return 11 (not 13).

// 1. Create a function that accepts a string as a parameter
// 2. Create a variable called count and set it equal to 0
// 3. Create a for loop that iterates through the string
// 4. Inside the loop check all characters to see if they are non space characters. 
// Increment count if they are
// 5. Return count

function countNonSpaces(string){
    let count = 0

    for(let i = 0; i<string.length;i++){
        if(string[i] != " "){
            count++
        }
    }

    return count
}

// console.log(countNonSpaces("lol cool dude"))

// Create a function that accepts a list and a parameter N return the element that is N-from-array’s-end. 
// Given ([5,2,3,6,4,9,7],3) , return 4. If the array is too short, return null .​

function returnN(array, n){
    return array[array.length - n]
}

// console.log(returnN([5,2,3,6,4,9,7], 3))


// Create a function that accepts an array of numbers and a number Y as a parameters. 
// Return a count of all of the numbers that are greater than Y. Example (Given [1,2,3,4,5] and y=2 return 3. 
// In this case 2 will be our Y)

// 1. Create a function with 2 parameters (array, y)
// 2. Create a count variable and set it equal to 0
// 3. Use a for loop to iterate through the array and count all elements that are greater than y
// 4. Return count

// function greaterThanY(array, y){
//     let count = 0

//     for(let  i = 0;i<array.length;i++){
//         if(array[i] > y){
//             count++
//         }
//     }

//     return count
// }

// console.log(greaterThanY([1,2,3,4,5], 2))


// Shift Array Values Left shiftArrayValsLeft(arr). Given an array, move all values forward (to the left) by one index
// dropping the first value and leaving a 0 (zero) value at the end of the array. 
// Given [1,2,3,4,5] return 
// [2,3,4,5,0]. You DON’T need to use the swap method for this one.​
// [1,2,3,4,5]
// [2,2,3,4,5]
// [2,3,3,4,5]
// [2,3,4,4,5]
// [2,3,4,5,5]
// [2,3,4,5,0]
//1. Create a function that accepts 1 parameter (Arr)
//2. Create a for loop that starts at 0 and ends at arr.length-1
//3. Inside the for loop we shift the values of i+1 and i
//4. Exit the for loop an set the value at array.length-1 to 0


function shiftArrayValsLeft(arr){
    for(let i = 0; i<arr.length-1;i++){
        arr[i] = arr[i+1]
    }

    arr[arr.length-1] = 0

    return arr
}

/*
-Shift Array Values Left shiftArrayValsLeft(arr). Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array. Given [1,2,3,4,5] return [2,3,4,5,0]. You DON’T need to use the swap method for this one.​
*/

const array = [1,2,3,4,5]
const firstElement = array.shift()
array.push(0)

// console.log(array);

// console.log( shiftArrayValsLeft([1,2,3,4,5]) )

// Given an array with only 2 values. Swap the places of those 2 values and return the 
// altered array. Given [1,2] return [2,1]​

function swap(arr){
    let temp = arr[0] //arr = [1,2]

    arr[0] = arr[1] //arr=[2,2]

    arr[1] = temp //arr = [2,1]

    return arr
}

// console.log(swap([1,2]))


// Array swap pairs. Swap positions of successive pairs of values of a given array. 
// If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.​

// 1. Create a function with the correct parameters (arr)
// 2. Create a for loop that start = 0, end = i<arr.length-1, i += 2
// 3. Inside the loop swap the successive pairs
// 4. return the altered array.

let swapPairs = (arr) =>{
    for(let i = 0; i<arr.length-1; i+=2){
        let temp = arr[i] //arr = [1,2]

        arr[i] = arr[i+1] //arr=[2,2]

        arr[i+1] = temp //arr = [2,1]
    }

    return arr
}

// console.log(swapPairs([1,2,3,4]))

//Array: Min to Front. Given an array of comparable values, move the lowest element to array’s front, 
//shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. 
//Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

//1. Create a function with the correct parameters (arr)
//2. Create a function that finds the minimum value in the array and returns the index
//3. Create a for loop that starts at the minimum index that is returned by the function above
//4. Inside the for loop swap the value that is at the current index with the value that is at the index infront of it
//5. return the altered array


function findMinIdx(array){
    let min = array[0], minIndex = 0

    for(let i = 0;i<array.length;i++){
        if(array[i] < min){
            min = array[i]
            minIndex = i
        }
    }

    return minIndex
}

let minToFront = (arr) =>{
    let minIndex = findMinIdx(arr)

    for(let i = minIndex; i>0;i--){
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
    }

    return arr
}

// console.log(minToFront([4,2,-1,3,5]))

// Given an array with only 2 values. Swap the places of those 2 values and return the 
// altered array. Given [1,2] return [2,1]​

function swap(arr){
    let temp = arr[0] //arr = [1,2]

    arr[0] = arr[1] //arr=[2,2]

    arr[1] = temp //arr = [2,1]

    return arr
}

// console.log(swap([1,2]))


//Array: Push Front. Given array and an additional value, create a function that inserts this value at 
//the beginning of the array. Do this without using any built-in array methods except push() . Given [2,3,4,5],1 
//return [1,2,3,4,5]. Hint: Push the value to the end of the array. Use the swap method to move the value to the front.

// 1. Create the function with the correct params (arr, val)
// 2. Push value that is passed in as param into the end of the array
// 3. Create a for loop that starts at the end of the array and ends before index 0
// 4. Inside the loop run the swap method to val to the begining of the array
// 5. Return altered array

function pushFront(arr,val){
    arr.push(val)
    //[2,3,4,5,1]
    for(let i = arr.length-1; i>0;i--){
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
    }

    //[1,2,3,4,5]

    return arr
}

// console.log(pushFront([2,3,4,5], 1))

//Array: Pop Front Given array, remove and return the value at the beginning of the array. 
//Do this without using any built-in array methods except pop(). Given [1,2,3,4,5] return 
//1 and your array should look like this [2,3,4,5]

//1. Create function with correct params (arr)
//2. Create a for loop that starts at 0 and before array.length - 1
//3. Inside the for loop swap first value to the end of the array
//4. Exit the for loop and pop off the last value in the array and return it

function popFront(arr){
    for(let i = 0;i<arr.length-1;i++){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }

    //[2,3,4,5,1]

    return [arr.pop(), arr]
}

// console.log(popFront([1,2,3,4,5]))

function arrConcat(arr1,arr2){
    for(let i = 0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
    return arr1
}

// Array: Remove At. Given array and an index into array, remove and return 
// the array value at that index. Do this without using built-in array methods 
// except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0). 
// Given [1,2,3,4,5], 2 return and  remove the value 3

//1. Create function with correct params (arr, index)
//2. Create a for loop that starts at the index that passed in as a param
//  and before array.length - 1
//3. Inside the for loop swap first value to the end of the array
//4. Exit the for loop and pop off the last value in the array and return it

function removeAt(arr, index){
    for(let i = index; i < arr.length-1;i++){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }

    return arr.pop()
}

// console.log(removeAt([1,2,3,4,5],0))

// Remove Shorter Strings. Given a string array and value (length), remove any strings shorter 
// than length from the array. Given ([“you”,”I”,”ab”], 3) return [“you”]. You can use any built in 
// functions to remove a value. Hint find a method that removes a value from an array. ​

function removeShorterStrings(arr,length){
    for(let i = 0;i<arr.length;i++){
        if(arr[i].length < length){
            removeAt(arr,i)
            i--
        }
    }

    return arr
}

// console.log(removeShorterStrings(["you","I","ab"],3))

//Remove Even-Length Strings. Build a standalone function to remove strings of even lengths 
// from a given array. For array containing ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], 
// change that same array to ["Nope!","Its","Chris","."].

function removeEvenLengthStrings(arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i].length % 2 == 0){
            removeAt(arr,i)
            i--
        }
    }

    return arr
}

function useFilter(arr){
    return arr.filter((val) => val.length % 2 !==0)
}

// console.log(removeEvenLengthStrings(["Nope!","Its","Kris","Test","Woww"]))

// Missing Value. You are given a sorted array of length N that contains integers from 0 to N. 
// One integer value is missing. Quickly determine and return the missing value. Given ([0,1,3]), 
// return 2.

function missingValue(arr){
    for(let i = 1;i<arr.length;i++){
        if(arr[i - 1] != arr[i] - 1){   // if 0 == (1-1)
            return arr[i] - 1
        } 
    }
}

// console.log(missingValue([0,1,2,4]))

//Array Shuffle: Create a function called shuffle(arr), to efficiently shuffle a given 
//array’s values in random order. Hint: Remember the swap method? Use a random number generator 
// to come up index that needs to be swapped. [1,2,3] => [2,1,3], [3,1,2]​

//1. Create a function called shuffle that takes 1 parameter (arr)
//2. Create a for loop that starts at 0 and ends at arr.length-1
//3. Inside the loop create a variable and assign it to a randomly generated index
//4. Use the swap method to to swap the value at the current index with the value that is at the 
// randomly generated index
// 5. Return the shuffled array

function shuffle(arr){
    for(let i=0;i<arr.length;i++){
        let randomIdx = Math.floor(Math.random() * arr.length)

        let temp = arr[i]
        arr[i] = arr[randomIdx]
        arr[randomIdx] = temp
    }

    return arr
}

// console.log(shuffle([1,2,3,4,5]))

//Array: Filter Range. Given arr and values min and max, retain only the array values between 
// min and max indexes. Given [1,2,3,4,5],2,4 return [3,4,5].No built-in array functions. 
// This does not have to be done in place meaning you don't have to return the same array that 
// was passed in as a parameter

function filterRange(arr,min,max){
    let output = []

    for(let i = min; i<=max;i++){
        output.push(arr[i])
    }

    return output
}

// console.log(filterRange([1,2,3,4,5], 1, 4))

//Given a string of words (sentence) create a function that capitalizes every word in 
//the string. Given “hello there skillspire” return “Hello There Skillspire”.

//#1. Create the function with the correct params
//#2. Create a variable and assign the the first letter of input string (capitalized)
// let output = `${string[0].toUppercase()}`
// #3. Create a for loop that starts at and ends at string.length-1
// #4. If there is a space before the current character then captitalize the current
//character and add it to the output string. Otherwise add the the character to the 
//output string.
//#5. Return output

function capitalizeSentence(string){
    let output = `${string[0].toUpperCase()}`

    for(let i = 1;i<string.length;i++){
        output += string[i-1] == " " ? `${string[i].toUpperCase()}` : string[i]
    }

    return output
}

// console.log(capitalizeSentence("hey there dalailah"))

//Create a standalone function that accepts an input string,removes leading and trailing 
//white spaces (at beginning and end only) from the string and capitalizes the first letter of 
//every word, and return that string. ​Given  "        whitespaces are cool        "  ​return 
//“Whitespaces Are Cool”. Remember don’t use any built in methods to '
//complete this task except any methods that capitalize a character. Methods like string.trim() are not allowed

//#1 Create a function with the correct parameters
//#2 Create an output string and store inside variable
//#3 Create 2 variables start and end. start = 0 end= string.length -1
//#4 Create a while loop where the condition is while(string[start] == " ") and 
// also create another loop while(string[end] == " ").
//#5 Create a for loop that starts at start and ends at end. Inside the for loop
//add characters to output string. (This can also be done using string.substring)
//#6 return capitalizeSentence(output_string)

function removeWhiteSpaceAndCapitalize(string){
    let output = "", start = 0, end = string.length - 1

    while(string[start] == " ") start++
     
    while(string[end] == " ") end--

    for(let i = start; i<=end ;i++) output += string[i] //You can also use string.substring(start,end)

    return capitalizeSentence( output )
}

console.log(removeWhiteSpaceAndCapitalize("        whitespaces are cool        "))