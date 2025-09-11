let arr=[10,"ali",true,[1,2,3]];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[3][0]);
// from above and below line  we are getting value at 3 indx which is array then going into the array by writing its index 
console.log(arr[3][1]);
console.log(arr[3][2]);

//splice
let array=[1,2,3,4,5,6,7,8,9];


//array.splice(startindex,how many number of item u want to delete from startindex ,add new item at start index and old start index value will move to right side,additem)

array.splice(2,2);//remving from index 2 , 2 item including index 2 and 3
console.log(array);
array.splice(2,0,99,100);
console.log(array);


//slice
//slice extract part of array 
let colours=['black','white','pink','orange','yellow','red'];
// Extract elements from index 1 to (but not including) index 5
let extract=colours.slice(1,5);
console.log(extract);