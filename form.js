// let userName = document.getElementById('name').value;
// let userEmail = document.getElementById('email').value;
// let userMsg = document.getElementById('msg').value;
// let errorbox = document.getElementById('errorbox');

const validate = () => {
  let userName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMsg = document.getElementById("msg").value;
  let errorbox = document.getElementById("errorbox");

  errorbox.style.padding = "10px";
  errorbox.style.position = "sticky";

  // let errors = [];
  if (userName === "") {
    errorbox.innerHTML = "Please write your correct name!";
    // errors.push('Please write your correct name!');
  } else if (userEmail === "" || userEmail.indexOf("@") == -1) {
    errorbox.innerHTML = "Please write your correct email!";
    // errors.push('Please write your correct email!');
  } else if (userMsg === "" || userMsg.length < 20) {
    errorbox.innerHTML =
      "Please fill out the message with atleast 20 characters! ";
    // errors.push('Please fill out the message with atleast 20 characters! ');
  } else {
    errorbox.innerHTML =
      " 📧 Your form has been submitted succesfully ☑️";

}
  
 // if (errors.length > 0) {
  //     errorbox.innerHTML = ``
  // }
};
