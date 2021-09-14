// 1.Reverses the given string input
const reverseString = (input: string): string => {
    const arrayString = input.split('');
    return arrayString.reverse().join('');
};

// 2.Reverses a number
const reverseNumber = (input: number): number => {
    const arrayString = input.toString().split('');
    return +arrayString.reverse().join('');
};

// 3.Checks whether the given input is palindrome or not.
const isPalindrome = (input: string): boolean => {
    return input == input.split('').reverse().join('');
};

// 4.Returns all possible letter comibinations of a given input.
const subStrings = (input: string): string[] => {
    const letters = input.split('');
    const combinations = Math.pow(2, input.length);
    let result = [];
    for (let i = 0; i < combinations; i++) {
        let temp = '';
        for (let j = 0; j < letters.length; j++) {
            if (i & Math.pow(2, j)) {
                temp += letters[j];
            }
        }
        if (temp) {
            result.push(temp);
        }
    }

    return result;
};

// 5.Puts a given input letters in alphabetical order
const alphabeticalOrder = (input: string): string => {
    return input.split('').sort().join('');
};

// 6.Converts the first letter to upper case
const ucFirst = (input: string): string => {
    return input[0].toUpperCase() + input.substring(1);
};

// 7.Converts the first letter of each word to upper case
const ucFirstPhrase = (input: string): string => {
    const words = input.split(' ');

    return words.map((element) => ucFirst(element)).join(' ');
};

// 8.Finds the longest word in a given input
const findLongestWord = (input: string): string => {
    const words = input.split(' ');
    let longestLength = 0;
    let longestIndex = 0;
    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > longestLength) {
            longestLength = length;
            longestIndex = i;
        }
    }

    return words[longestIndex];
};

// 9.Finds the number of vowels in a given input
const vowelsCount = (input: string): number => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = 0;
    for (let index = 0; index < input.length; index++) {
        if (vowels.indexOf(input[index]) != -1) {
            result++;
        }
    }

    return result;
};

// 10. Checks whether the given number is prime or not.
const isPrime = (input: number): boolean => {
    if (input <= 1) {
        return false;
    }
    let isPrime = true;
    for (let i = 2; i <= input / 2; i++) {
        if (input % i == 0) {
            isPrime = false;
        }
    }

    return isPrime;
};

const typeDetector = (input: any): string | [] => {
    return typeof input;
};

const getIdentityMatrix = (row: number) => {
    let result: any[] = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row; j++) {
          const element = (i == j) ? 1 : 0;
          if (result[i]) {
              result[i].push(element)
          } else {
              result[i] = [element];
          }
        }
    }

    return result;
};

const findSecondLowestSecondGreatest = (input: number[]): [number, number] | never => {
    if (input.length < 2) {
        throw new Error('Invalid argument.');
    }
    const sortedArray = input.sort();
    return [sortedArray[1], sortedArray[input.length - 2]];
};

const findDivisors = (input: number): number[] => {
    let result: number[] = [];
    for (let i = 0; i <= input / 2; i++) {
        if (input % i === 0) {
            result.push(i);
        }
    }

    return result;
};

const sumArrayElements = (input: number[]): number => {
    return input.reduce((a, b) => a + b, 0);
};

const isPerfect = (input: number): boolean => {
    return input == sumArrayElements(findDivisors(input));
};

const findFactors = (input: number): number[] => {
    return [...findDivisors(input), input];
};

const convertToCoins = (input: number): number[] => {
    const coins = [25, 10, 5, 2, 1];
    let result = [];

    const coin25 = input / 25;
    if (coin25 > 0) {
        const count = Math.floor(coin25);
        input -= count * 25;
        result.push(...Array(count).fill(25));
    }

    const coin10 = input / 10;
    if (coin10 > 0) {
        const count = Math.floor(coin10);
        input -= count * 10;
        result.push(...Array(count).fill(10));
    }

    const coin5 = input / 5;
    if (coin5 > 0) {
        const count = Math.floor(coin5);
        input -= count * 5;
        result.push(...Array(count).fill(5));
    }

    const coin2 = input / 2;
    if (coin2 > 0) {
        const count = Math.floor(coin2);
        input -= count * 2;
        result.push(...Array(count).fill(2));
    }

    const coin1 = input;
    if (coin1 > 0) {
        const count = Math.floor(coin1);
        result.push(...Array(count).fill(1));
    }
    return result;
};

const power = (bases: number, exponent: number): number => {
    exponent = ~~exponent;
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= bases;
    }
    return result;
};

const extractUniqueCharacters = (input: string): string => {
    let result = '';
    for (let i = 0; i < input.length; i++) {
       if (result.indexOf(input[i]) === -1) {
           result += input[i];
       }
    }

    return result;
};

const getNumberOfOccurrences = (input: string): object => {
    input = removeWhiteSpace(input);
    let result: any = {};
    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter in result) {
            result[letter] = result[letter] + 1;
        } else {
            result[letter] = 1;
        }
    }

    return result;
};

const removeWhiteSpace = (input: string): string => {
    return input.replace(/\s/g, '');
};

const binarySearch = (array: number[], search: number): boolean => {
    if (array == null) return false;
    const midIndex = ~~(array.length / 2);
    const midValue = array[midIndex];

    if (midValue === search) {
        return true;
    } else if (array.length === 1) {
        return false;
    } else if (search > midValue) {
        let newArray = array.slice(midIndex + 1);
        if (newArray.length == 0) {
            newArray = [array[midIndex]];
        }
        return binarySearch(newArray, search);
    } else {
        let newArray =  array.slice(0, midIndex - 1);
        if (newArray.length == 0) {
            newArray = [array[midIndex - 1]];
        }
        return binarySearch(newArray, search);
    }
};

const largerThan = (input: number[], criteria: number): number[] => {
    return input.filter((element) => element > criteria);
};

const randomId = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charLength = chars.length;
    let result = '';
    while (result.length != length) {
        const randomIndex = ~~(Math.random() * charLength);
        result += chars[randomIndex];
    }
    return result;
};

const fixedLengthPossibleCombinations = (input: number[], desired: number): number[][] | never => {
    const length = input.length;
    if (length < desired) {
        throw new Error('Invalid argument');
    }
    let combinations = Math.pow(2, length);
    let result = [];
    for (let i = 0; i < combinations; i++) {
        const temp = [];
        for (let j = 0; j < length; j++) {
            if (i & Math.pow(2, j)) {
                temp.push(input[j])
            }
        }
        if (temp.length == desired) {
            result.push(temp)
        }
    }
    return result;
};

const countNumberOfOccurrences = (input: string, search: string): number => {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === search) {
            result++;
        }
    }
    return result;
};

const findFirstNonRepeatedCharacter = (input: string): string | null => {
    for (let i = 0; i < input.length; i++) {
        const temp = input.substring(0, i) + input.substring(i + 1);
        console.log(input[i], temp)
        if (temp.indexOf(input[i]) === -1) {
            return input[i];
        }
    }
    return null;
};

const bubbleSort = (input: number[]): number[] => {
    let result = input;
    let found = true;
    while (found) {
        found = false;
        for (let i = 0; i < input.length - 1; i++) {
            if (result[i] > result[i + 1]) {
                const temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp;
                found = true;
            }
        }
    }

    return result;
};

const longestMember = (input: string[]): string => {
    let maxLength = 0;
    let maxResult = '';
    for (const element of input) {
        if (element.length > maxLength) {
            maxLength = element.length;
            maxResult = element;
        }
    }
    return maxResult;
};

const acceptingFunction = (input: Function) => {
    return input();
};

const getFunctionName = (input: Function): string => {
    return input.name;
};

const longestSubStringWithoutRepeatingCharacters = (input: string): string => {
    let subStrings: string[] = [];
    for (let i = 0; i < input.length; i++) {
        let temp = input[i];
        for (let j = i + 1; j < input.length - 1; j++) {
            if (temp.indexOf(input[j]) === -1) {
                temp += input[j];
            }
        }
        subStrings.push(temp);
    }

    let max = 0;
    let result = '';
    for (let subString of subStrings) {
        if (subString.length > max) {
            max = subString.length;
            result = subString;
        }
    }
    return result;
};

const findLongestPalindrome = (input: string): string => {
    let palindromes: string[] = [];
    for (let i = 0; i < input.length; i++) {
        let temp = input[i];
        for (let j = i + 1; j < input.length - 1; j++) {
            temp += input[j];
            if (isPalindrome(temp)) {
                palindromes.push(temp);
            }
        }
    }

    let max = 0;
    let result = '';
    for (const element of palindromes) {
        if (element.length > max) {
            max = element.length;
            result = element;
        }
    }

    return result;
}


//
// const array1 = [
//     {
//         id: 1,
//         sellerIds: [1,2,3,4],
//         city: 'Helsinki',
//         country: 'Finland',
//         rating: 99
//     }
// ];
//
// const array2 = [
//     {
//         id: 1,
//         sellerIds: [3,4,5,6],
//         city: 'Helsinki',
//         country: 'Finland',
//         rating: 96
//     }
// ];
//
// merge(array1, array2);
// /*
//   return [
//     {
//       id: 1,
//       sellerIds: [1,2,3,4,5,6],
//       city: 'Helsinki',
//       country: 'Finland',
//       rate: 96
//     }
//   ]
// */