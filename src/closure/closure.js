function greeting() {
  let username = "Juan";

  function displayUserName() {
    return `Hola ${username}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g());
