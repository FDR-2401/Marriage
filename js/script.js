function getInputValue() {
  let age = document.getElementById("age").value;
  let salary = document.getElementById("salary").value;
  let height = document.getElementById("height").value;

  if (age >= 21) {
    if (age <= 30) {
      if (salary >= 30000) {
        if (height >= 5) {
          document.getElementById("print").innerHTML = "বিয়ে করতে পারবা !";
        } else {
          document.getElementById("print").innerHTML = "উচ্চতা বাড়াও !";
        }
      } else {
        document.getElementById("print").innerHTML = "স্যালারি বাড়াও !";
      }
    } else {
      document.getElementById("print").innerHTML = "বিয়ের বয়স পার হয়ে গেছে !";
    }
  } else {
    document.getElementById("print").innerHTML = "বিয়ের বয়স হয় নাই !";
  }
}

function getReload() {
  location.reload();
}
