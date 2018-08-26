// Init github
const github = new GitHub(); 

//Init UI
const ui = new UI(); 

// Search Input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener('keyup', (e) => {

  // Get user text
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
    .then ( data => {

      if (data.profile.message === "Not Found") {
        ui.clearProfile();
      } else {
        console.log(data.profile);
        ui.getProfile(data.profile);
      }
    })
  } else {
    //clear data
  }
});