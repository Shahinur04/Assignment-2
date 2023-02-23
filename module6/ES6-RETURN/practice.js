// Write an arrow function that will take 3 parameters, will multiply  the parameters and will return the result


const multiply = (a, b, c) => a * b * c;
const result0 = multiply(2, 3, 4);
console.log(result); // 24

// Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani. 
console.log("I am a web developer.");
console.log("I love to code.");
console.log("I love to eat biryani.");

// Write an arrow function that will take 2 parameters: One parameter  will come from you and the other parameter will be a default  parameter. Add these two parameters and return the result. 

const addWithDefault = (a, b = 5) => a + b;
const result1 = addWithDefault(3); // uses default value of b, so result1 will be 8 (3 + 5)
const result2 = addWithDefault(3, 2); // specifies value of b, so result2 will be 5 (3 + 2)


// Write an arrow function where it will do the following: 
// a) It will take an array where the array elements will be the  name of your friends 
// b) Check if the length of each element is even, push elements  with even length to a new array and return the result 
// Print the result.  


const filterEvenLengthNames = (names) => {
    const evenLengthNames = [];
    for (let name of names) {
      if (name.length % 2 === 0) {
        evenLengthNames.push(name);
      }
    }
    return evenLengthNames;
  };
  const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const result = filterEvenLengthNames(friends);
  console.log(result); // ["Charlie", "David"]
    

//   Write an arrow function where it will do the following: 
// a) Square each array element 
// b) Calculate the sum of the squared elements 
// c) Return the average of the sum of the squared elements


const averageOfSquaredElements = (arr) => {
    const squaredArr = arr.map((num) => num ** 2);
    const sumOfSquaredElements = squaredArr.reduce((acc, val) => acc + val, 0);
    const average = sumOfSquaredElements / squaredArr.length;
    return average;
  };
  const numbers = [1, 2, 3, 4, 5];
const result4 = averageOfSquaredElements(numbers);
console.log(result); // 11

// Write an arrow function where it will do the following: 
// a) It will take two array inputs 
// b) Combine the two arrays and assign them in a new array c) Find the maximum number from the new array and return the  result



const findMaxFromCombinedArrays = (arr1, arr2) => {
    const combinedArr = [...arr1, ...arr2];
    const max = Math.max(...combinedArr);
    return max;
  };
  const numbers1 = [1, 2, 3, 4, 5];
  const numbers2 = [6, 7, 8, 9, 10];
  const result5 = findMaxFromCombinedArrays(numbers1, numbers2);
  console.log(result); // 10
    