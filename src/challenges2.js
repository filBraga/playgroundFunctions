// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech == '') {
    return 'Vazio!';
  }
  sortTech = tech.sort();
  let techArray = [];
  for (i in sortTech){
    techArray.push({name: name, tech: sortTech[i]})
  }
  return techArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
