function myMainFunction() {
  let myWelcomeMessage = "Hello, world!";
  console.log(myWelcomeMessage);
 
  let myPersonObject = {
    myPersonName: "Alice",
    myPersonAge: 30,
    myPersonOccupation: "Software engineer"
  };
  console.log(myPersonObject.myPersonOccupation);

  let myColorArray = ["red", "green", "blue"];
  for (let myIndex = 0; myIndex < myColorArray.length; myIndex++) {
    console.log(myColorArray[myIndex]);
  }

  let myCount = 10;
  while (myCount > 0) {
    console.log(myCount);
    myCount--;
  }

  function myAddNumbersFunction(myFirstNumber, mySecondNumber) {
    return myFirstNumber + mySecondNumber;
  }
  let myResult = myAddNumbersFunction(2, 3);
  console.log(myResult);

  let myNumbersArray = [1, 2, 3];
  let myDoubledNumbersArray = myNumbersArray.map(function(myNumber) {
    return myNumber * 2;
  });
  console.log(myDoubledNumbersArray);

  let myEvenNumbersArray = myNumbersArray.filter(function(myNumber) {
    return myNumber % 2 === 0;
  });
  console.log(myEvenNumbersArray);

  let mySum = myNumbersArray.reduce(function(myTotal, myNumber) {
    return myTotal + myNumber;
  }, 0);
  console.log(mySum);

  let myIntervalId = setInterval(function() {
    console.log("Tick");
  }, 1000);

  setTimeout(function() {
    clearInterval(myIntervalId);
    console.log("Stopped");
  }, 5000);

  let myDate = new Date();
  console.log(myDate.getFullYear());

  let mySentence = "The quick brown fox jumps over the lazy dog";
  let myWordsArray = mySentence.split(" ");
  console.log(myWordsArray);

  let myAnimalsArray = ["cat", "dog", "hamster"];
  console.log(myAnimalsArray.join(", "));

  let myLongWord = "https://bit.ly/43eYTkf";
  console.log(myLongWord.length);

  let myNumber = 1234.5678;
  console.log(myNumber.toFixed(2));

  let myRandomNumber = Math.random();
  console.log(myRandomNumber);

  let myRoundedNumber = Math.round(myRandomNumber * 100);
  console.log(myRoundedNumber);
}

myMainFunction();
