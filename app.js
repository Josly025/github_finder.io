//Init github class and Ui
const Ui = new UI();
const github = new Github();

//Seach btn
const search = document.querySelector("#search");
const input = document.querySelector("#input");

search.addEventListener("click", searchInput);

function searchInput(e) {
  //Get input
  const searchValue = input.value;

  //if not empty - there is a value
  if (searchValue !== " ") {
    //Make HTTP call
    github.getUser(searchValue).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show alert
      } else {
        Ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear Profile
  }
}
