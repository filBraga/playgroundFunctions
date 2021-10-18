// Filipe Braga

// Desafio 1
function compareTrue(p1, p2) {
  // seu código aqui
  if (p1 === true && p2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(nameInput) {
  // seu código aqui
  let index = 0;
  for (let i in nameInput) {
      index = i;
  }

  let firstName = nameInput[0];
  let lastName = nameInput[index];
  let lastFirstName = lastName + ', ' + firstName;
  return lastFirstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sumPoints = wins * 3 + ties;
  return sumPoints;
}

// Desafio 6
function highestCount(arrayNums) {
  // seu código aqui
  let largestNum = arrayNums[0];
  let index = 0;
  for (i in arrayNums){
    if (largestNum < arrayNums[i])
    largestNum = arrayNums[i];
  }
  for (j in arrayNums)
  if (largestNum == arrayNums[j]){
    index += 1;
  }
  return index;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let deltaCat1 = cat1 - mouse;
  let deltaCat2 = cat2 - mouse;

  let a = Math.abs(deltaCat1);
  let b = Math.abs(deltaCat2);

  if (a < b) {
    return 'cat1';
  } if (a > b) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(fizBuzzNums) {
  // seu código aqui
  let fizzBuzzArray = []
  for (i in fizBuzzNums){
    if (fizBuzzNums[i] % 3 == 0 && fizBuzzNums[i] % 5 == 0){
      fizzBuzzArray.push("fizzBuzz")
      continue
    } if (fizBuzzNums[i] % 3 == 0){
      fizzBuzzArray.push("fizz")
      continue
    } if (fizBuzzNums[i] % 5 == 0){
      fizzBuzzArray.push("buzz")
      continue
    } else {
      fizzBuzzArray.push("bug!")
      continue
    }
  }
  return fizzBuzzArray
}

// Desafio 9
function encode(str) {
  // seu código aqui
  let splitStr = str.split('');
  for (i in splitStr){
    if (splitStr[i] == 'a'){
      splitStr[i] = 1;
    } if (splitStr[i] == 'e'){
      splitStr[i] = 2;
    } if (splitStr[i] == 'i'){
      splitStr[i] = 3;
    } if (splitStr[i] == 'o'){
      splitStr[i] = 4;
    } if (splitStr[i] == 'u'){
      splitStr[i] = 5;
    }
  } let joinStr = splitStr.join('');
  return joinStr;
}
function decode(str) {
  // seu código aqui
  let splitStr = str.split('');
  for (i in splitStr){
    if (splitStr[i] == 1){
      splitStr[i] = 'a';
    } if (splitStr[i] == 2){
      splitStr[i] = 'e';
    } if (splitStr[i] == 3){
      splitStr[i] = 'i';
    } if (splitStr[i] == 4){
      splitStr[i] = 'o';
    } if (splitStr[i] == 5){
      splitStr[i] = 'u';
    }
  } let joinStr = splitStr.join('');
  return joinStr;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
