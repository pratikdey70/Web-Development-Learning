//Array methods
let num = [1,2,3,4,5]


// 1.tostring()
let b = num.toString() //Converting integers to string
console.log(b);
console.log(typeof(b));


// 2.join()
let c= num.join("_")
console.log(c, typeof c);


// 3.pop()  --> Removes last element from the array
num.pop()
console.log(num); //Will remove the last element i.e. 5



// 4.pudh()  --> Adds a new element at the end of the array
let newElement = num.push(56);
console.log(num);
//console.log(num.length);



// 5.shift()  --> Removes first element and returns it
let r = num.shift();
console.log(r, num); //will return the modified element



// 6.unshift()  --> Adds a new element and return it
let p= num.unshift(78);
console.log(p, num);



// 7.delete()  -->Array elements can be deleted using the delete operator
delete num[0];
console.log(num.length); //delete method will not affect the length of the array


// 8.concat()  -->for adding two or more arrays
let num2 = [7,8,9]
let num3 = [11,12,13]
let newArray = num.concat(num2,num3)
console.log(newArray);



// 9.Sort()  -->Helps in sorting element
let num4 = [4,2,8,9,1,40,21,32]
num4.sort()
console.log(num4);  //This will not simply sort just run to check for printing the sorted element then check below



let compare = (a,b) =>{
    return a-b
}
let num5 = [4,2,8,9,1,40,21,32]
num4.sort(compare)
console.log(num5);



// 10.reverse()
let revElement = num5.reverse();
console.log(revElement);



// 11.Splice and Slice    -->Splice can be used to add new items to an array      -->Slice out a piece from an array, it creates a new array
let num1 = [1,2,3,4,5,6]
num1.splice(2,3,10,100,1000)     // -->Here 2 is the position and 3 refers to number of elements to be removed and after that all the numbers will be added to the array
console.log(num1);

let sliceElement = num1.slice(2,4)
console.log(sliceElement);