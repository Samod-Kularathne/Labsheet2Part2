function Q1(){
    const currentTime = new Date();

    if (currentTime.getHours() < 10){
        document.write("good morning");
    }else if (currentTime.getHours() < 20){
        document.write("good day");
    }else{
        document.write("good evening");
    }
}

function Q2(){
    let fruit = prompt("select the fruit(banana/pineapple/apple)");
    switch(fruit){
        case "banana":
            alert("yellow");
            break
        case "pineapple":
            alert("orange");
            break
        case "apple":
            alert("green");        
    }

}

function Q3(){
    let num1 = prompt("enter the first number");
    let num2 = prompt("enter the second number");
    let num3 = prompt("enter the third number");
    
    let largestNumber = num1; 
  
    if (num2 > largestNumber) {
      largestNumber = num2; 
    }
  
    if (num3 > largestNumber) {
      largestNumber = num3; 
    }

    document.write("largest number is ",largestNumber);
  }

function Q4(){
    var prime = true;
    let n = prompt("enter the number ");
    if (n==1)
    {
        document.write("not a prime number");
    }
    else if(n == 2)
    {
        document.write("prime number");
    }
    else{
        for(var x = 2; x < n; x++)
        {
            if(n % x == 0)
            {
                prime = false;
                break;
            }
        }
        if(prime){
            document.write("prime number");
        }
        else{
            document.write("not a prime number");
        }
    }
}

function Q5(){
    for(var i = 1; i < 30; i++){
        if( i % 2 == 1){
            document.write(i);
            document.write("<br>");
        }
    }
}

function Q6(){
    let array = [1, 2, 3, 4, 5];
    for(var i =0; i<5; i++){
        document.write("array[",i,"] = ", array[i]);
        document.write("<br>");

    }
}

function Q7(){
    const numbers = [80, 30, 40, 50, 23];
    document.write(numbers);
    document.write("<br>");

    numbers[2] = 78;
    document.write(numbers);
    document.write("<br>");
    
    const length = numbers.length;
    document.write("length = ",length);
    document.write("<br>");
    
    numbers.sort((a,b) => a-b);
    document.write(numbers);  
}

function Q8(){
    const names = ["sadun","kamal","nimal","ruwan"];
    const string = names.join(', ');
    document.write(string);
    document.write("<br>");
    names.pop();
    document.write(names);
    document.write("<br>");
    names.push("nuwani");
    document.write(names);


}

function Q9(){
    const myGirls = ["Cecilie", "Lone"];
    document.write(myGirls);
    document.write("<br>");
    const myBoys = ["Emil", "Tobias", "Linus"];
    document.write(myBoys);
    document.write("<br>");
    let mergedArray = myGirls.concat(myBoys);
    document.write(mergedArray);

} 


function Q10(){
    numbersArray = [1, 13, 22, 123, 49];
    document.write(numbersArray);
    document.write("<br>");
    var i;
    var sum = 0;
    for(i=0; i<5;i++){
        sum = sum + numbersArray[i];
    }
    document.write("sum = ",sum);
    
}

