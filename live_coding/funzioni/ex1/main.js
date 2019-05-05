//Functions

//FizzBuzz

var label;

for (var i = 1; i<=100; i++){
  
  label = "";
  
  if ( (i % 3 === 0) || (i % 5 === 0)){
      
        if(i % 3 === 0){
          label += "Fizz"
        }
        if (i % 5 === 0){
          label += "Buzz"
        } 

    console.log(label);

  } else{
    console.log(i);
  }
  
  
}