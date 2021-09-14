# Common interview questions
## Summary
This repository aims to demonestrate the common questions asked in pair programming and interview sessions. You can find details, sample input and output for each problem [here](#Content).  
JavaScript is the chosen programming language for this project. Also it got elevated with the power of TypeScript.  

## Run the project
You need to have npm installed to be able to run this project. Once you installed npm, you can follow these steps:  
* Navigate to the project root directory
* Open a terminal and run the following command.
```bash
npm start
```

## Content
1. `reverseString`  
This function gets a string input and reverses it. For instance if we pass `Github` as an input to this function, we expect to see `buhtiG` as the result.
2. `reverseNumber`  
This function gets a number as an input and reverses it. By passing `123` to this function, we expect to see `321`.
3. `isPalindrome`  
Checks whether the given input is [palindrome](https://en.wikipedia.org/wiki/Palindrome) or not. By passing `noon`, we expect to see `true` in the output.
4. `subStrings`
Returns all possible letter comibinations of a given input.  
For instance by passing `abc`, we should see an output as follows: `[a, b, c, ab, ac, bc, abc]`





## Try it yourself
This repository is meant to be simple. So for running each function, just navigate to `app.ts` file and call the target function then print out the result.  
Here you can find an example of how you can run the code.
```typescript
console.log(reverseString('YaY..!'))
```
Checkout the terminal where you ran `npm start` script, there you can see the result.

## Author
Majid Akbari [Linkedin](https://linkedin.com/in/majid-akbari)

## Licence
[MIT](https://choosealicense.com/licenses/mit/)
