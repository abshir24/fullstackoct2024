//Create a function that accepts an array and replaces all negative values in the array 
//with the word "Negative". Example [-1,2,-3,4,-5] returns ["Negative",2,"Negative",4,"Negative"]

//1.Create a function with 1 parameter (array)
//2. Use a for to iterate through the input array. 
// The for loop should start at 0 and end at array.length - 1
//3. If the value at the current index is a negative number, then we update that value with the word "Negative"
//4. return the array

function replaceNegatives(array){
    for(let i = 0;i < array.length;i++){
        if(array[i] < 0){
            array[i] = "Negative"
        }
    }

    return array
}

// console.log( replaceNegatives( [-1,2,-3,4,-5] ) )

//Create a function that accepts a string and returns that string but 
// reversed. Example: Given "string"  return "gnirts"

//1. Create a function that accepts 1 string input as a parameter
//2. Create a variable that is assigned to an empty string
//3. Create a for loop that starts at string.length-1 and ends at 0
//4. Inside the for loop add the character at the current string index to our output string variable
//5. return the output string

function reverseString(string){
    let output = ""

    for(let i = string.length-1; i>=0; i--){
        output += string[i]
    }

    return output
}

console.log( reverseString("fly") )
