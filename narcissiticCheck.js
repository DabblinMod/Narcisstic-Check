function narcissistic(value) {
  // Code me to return true or false
  //A Narcisstic Number is a positive number which is the sum of its own digits
  //each raised to the number to the power of the num of digits in a given base
  
  let total_digit=0;//will check if the total of each digit equals the value.
  const arr=[];//creates an array for the values
  const str=value.toString()
  for(let i=0; i < str.length; i++){
    arr[i]=parseInt(str.charAt(i));
  }
  //console.log("The array is: "+arr);
  for(let i=0; i < arr.length; i++){
    //console.log(`Num: ${arr[i]} raise to ${str.length} is ${Math.pow(arr[i], arr.length)}`);
    total_digit+= Math.pow(arr[i], str.length);//takes each number and raises it by the length of digit
  }
  if(total_digit==value){
    return true;
  }
  return false;
}