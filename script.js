// 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.

// const arr=[1,4,8,75,49,45,76,13,255,478]
// function findNum(...arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===45) {
//             console.log(i);

//         }
//     }
// }
// findNum(...arr)

// first task end--->

// 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.

// const arr = [3, 2, 1, 4, 3, 1, 5, 6, 9, 3, 2, 52, 3, 2];

// function repeatMe(...arr) {
//   let num = 3;
//   let numCounter = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (num === arr[i]) {
//       numCounter++;
//     }
//   }
//   return numCounter;
// }

// console.log(repeatMe(...arr));

// second task end--->

// 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.

// function sumWithoutMinMax(...params) {
//   let minValue = params[0];
//   let maxValue = params[0];
//   let sum = 0;
//   let finalSum=0

//   for (let i = 0; i < params.length; i++) {
//     sum += params[i];
//     if (minValue > params[i]) {
//       minValue = params[i];
//     }
//     if (maxValue < params[i]) {
//       maxValue = params[i];
//     }

//   }

//   return finalSum=sum-(minValue+maxValue)
// }

// console.log(sumWithoutMinMax(1,2,3,4,5));

// third task end--->

// 4.Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function.

function changeNumPlace(number) {
  let finalNum = 0;
  if (number >= 10 && number < 100) {
    let lastNum = number % 10; 
    console.log(lastNum);
    number = (number - lastNum) / 10; 

    let firstNum = number % 10; 
    console.log(firstNum); 

    console.log(lastNum + "" + firstNum);
  } 
  
  else if (number >= 100 && number < 1000) {
    let lastNum = number % 10; 
    console.log(lastNum);
    number = (number - lastNum) / 10; 

    let middleNum = number % 10; 
    console.log(middleNum); 

    number = (number - middleNum) / 10; 
    let firstNum = number % 10;
    console.log(firstNum); //4
    console.log(lastNum + "" + middleNum + "" + firstNum);
  }
  
  else if (number >= 1000 && number < 10000) {
    let lastNum = number % 10; 
    console.log(lastNum);
    number = (number - lastNum) / 10; 

    let secNum = number % 10; 
    console.log(secNum); 

    number = (number - secNum) / 10; 
    let thrdNum = number % 10;
    console.log(thrdNum); 

    number = (number - thrdNum) / 10;
    let frthNum = number % 10;
    console.log(frthNum);
    console.log(lastNum + "" + thrdNum + "" + secNum + "" + frthNum);
  } 
  
  else if (number >= 10000 && number < 100000) {
    let lastNum = number % 10; 
    console.log(lastNum);
    number = (number - lastNum) / 10; 

    let secNum = number % 10; 
    console.log(secNum); 

    number = (number - secNum) / 10; 
    let thrdNum = number % 10;
    console.log(thrdNum); 

    number = (number - thrdNum) / 10;
    let frthNum = number % 10;
    console.log(frthNum);

    number = (number - frthNum) / 10;
    let fifthNum = number % 10;
    console.log(fifthNum);

    console.log(
      lastNum + "" + frthNum + "" + thrdNum + "" + secNum + "" + fifthNum
    );
  }
}
changeNumPlace(88175);
