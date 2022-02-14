1.// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

const toUpper = (strs) =>{
    let swap = '';
      strs.split('').map(str => {
          if (str == str.toUpperCase()) {
              swap += str.toLowerCase();
          } else {
             swap += str.toUpperCase();
          }
      });
      return swap;
  }
  
  console.log(toUpper('The Quick Brown Fox'))

2.  // Write a JavaScript program to compute the sum and product of an array of integers
const sumProduct=[3,6,32,11,10,15,29];
let sum = 0;
let product =1;

for(let i=0; i<sumProduct.length;i++){
   sum+= sumProduct[i] 
    product*= sumProduct[i]
}

console.log(`the sum is ${sum}and product: ${product}`)


3.// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)
const duplicates = [1,2,2,5,5,6, 'hello','hello']
console.log([...new Set(duplicates)])

4.// Write a JavaScript program to compute the union of two arrays. 
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

const union = (arr1, arr2) =>{
    let results = [] 
      let obj = {}
  
      for(let i=0;i<arr1.length; i++){
        obj[arr1[i]] = true;
      }
      for(let j=0; j<arr2.length; j++)
          obj[arr2[j]] = true
  
      // to loop an object (for in)
      for(const x in obj){
          results.push(x)
      }
      return results
  }
  console.log(union([1, 2, 3], [100, 2, 1, 10]))


5.// Write a JavaScript function to find the difference of two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


const difference = (arr1, arr2) =>{

    let diff = arr1.filter(x =>!arr2.includes(x))

    return diff;
}
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));



//6. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let num = [NaN, 0, 15, false, -22, '',undefined, 47, null]
let remove = []

for(let i of num){
   i&&remove.push(i) 
    // this is to copy out all the non-empty values
    num = remove
}
console.log(remove)

// 7.Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// “…..”

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

let x =[]

   for(let i=0;i<a.length;i++){
      console.log(`row ${i}`)
      for(let j =0; j < a[i].length; j++){
         console.log(a[i][j])
      }
   }


// 8. We have the following arrays 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["st","nd","rd", "th",'ft','th','th']
for(let i=0;i<color.length;i++){
   sole.log(`${i+1}${o[i]} choice is ${color[i]}`)
}
//9. Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const frequent = (arr) =>{
    let frequent = 0;
    let result = 0;
   
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        
        if (count > frequent) {
            frequent = count;
            result = arr[i];
        }
     
    }

    return (`${result}(${frequent} times)`);
}
// console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))


// 10.There are two arrays with individual values,
// write a JavaScript program to compute the sum of each individual index value from the given arrays. 
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const indexSum = (nums,val) =>{
    let arr1 = []
    let arr2 = []
    let sum = [];
 
    if(nums.length == val.length){
       for(x=0; x <nums.length; x++){
          sum.push(nums[x] + val[x]);   
       }
    }
    else if(nums.length > val.length){
       arr1 = [...nums]
       arr2 = [...val]
       let diff = arr1.length - arr2.length
       for(let i=0; i<diff;i++){
          arr2.push(0) 
          
       } 
       // console.log('nums is greater than val', diff)
    }
    else{
       arr1 = [...nums]
       arr2 = [...val]
       let diff = arr2.length - arr1.length
       for(let i=0; i<diff;i++){
          arr1.push(0) 
       }
       
      
    }
 
    // console.log(arr2)
     for(x=0;x<arr1.length;x++){
          sum.push(arr1[x] + arr2[x])
       }
   return sum 
 }
 console.log(indexSum([1,0,2,3,4],[3,5,6,7,8,13]))