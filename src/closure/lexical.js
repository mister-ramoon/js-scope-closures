const myGlobal = 0;

function myFucntion() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // Función Internar
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}
myFucntion();
