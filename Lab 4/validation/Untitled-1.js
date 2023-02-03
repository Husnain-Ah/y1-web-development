const validate_name = (name) => {
  let isValid = true;

  return isValid;
};

console.log(validate_name("ash"));

console.log(validate_name("ash") + ", Expected: true");
console.log(validate_name("Ash") + ", Expected: true");
console.log(validate_name("ash02") + ", Expected: false");
console.log(validate_name("bob") + ", Expected: true");
