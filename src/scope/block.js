function fruits() {
  if (true) {
    var fruit1 = "Apple"; // function Scope
    let fruit2 = "Kiwi"; // Block Scope
    const fruit3 = "Banana"; // Block Scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}
