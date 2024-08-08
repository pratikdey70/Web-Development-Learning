let marks_class_12 = [12,54,35,23,76, false, "Not Present"]
console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
marks_class_12[7] = 89; //Adding a new value to the array
console.log(marks_class_12[7]);
console.log("The length of class 12 marks is",marks_class_12.length);

console.log(typeof(marks_class_12));

for (let i = 0; i <  marks_class_12.length ; i++) {
  const element = marks_class_12[i];
  console.log(element);  
}