// Add login and ceate function requests
    // implement hashing passwords and creating sessions with cookies in server.js file

// Add function requests to bring up an error when user enters anything but an email and

function login() {
    let u = $("#username").val();
    let p = $("#password").val();
    $.get("/account/login/" + u + "/" + encodeURIComponent(p), (data, status) => {
      alert(data);
      if (data == "SUCCESS") {
        window.location.href = "disclaimer.html";
      }
    });
}

function logout() {
  //Implement logout functions to bring back to login page
}

function switchToCreate() {
  window.location.href = "createAccount.html";
}

function switchToForgotPassword() {
  window.location.href = "forgotpassword.html";
}

//Also check and report back if account already exists here as well
function createAccount() {
  let u = $("#create-username").val();
  let p = $("#create-password").val();
  $.get(
    "/account/create/" + u + "/" + encodeURIComponent(p),
    (data, status) => {
      alert(data);
      window.location.href = "disclaimer.html";
    }
  );
}