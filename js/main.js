const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

console.log(getRandomInt(12, 9));

const checkStringLength = (string, maxLength) => {
  return string.trim().length <= maxLength;
}

console.log(checkStringLength('написать функцию для проверки ', 5))


