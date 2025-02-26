# Create a function that accepts a string and returns that string but reversed. 
# Example: Given "string"  return "gnirts"​

# 1. Create a function that accepts a string as a parameter
# 2. Return string[::-1] reversed version of input

def reverseStr(string):
    return string[::-1]

# print(reverseStr("test"))

# Given an string create a function that checks to see if a string is a 
# palindrome. A palindrome is a word that is spelled the same forward and 
# backwards like “racecar”, “mom”, and “dad”.Hint: Reference the reverse string algorithm. 

def palindrome(string):
    return (reverseStr(string) == string)

# print(palindrome("raceca"))

str1 = "str1 "
str2 = "str2 "

arr1 = [1,3,5]
arr2 = [2,4]

arr3 = arr1 + arr2

print(arr3)

