// Input handling
const input = document
  .getElementById("input")
  .addEventListener("keyup", searchInput);

function searchInput(e) {
  //Get text
  const text = e.target.value;
  if (text !== " ") {
    console.log(text);
  }
}
