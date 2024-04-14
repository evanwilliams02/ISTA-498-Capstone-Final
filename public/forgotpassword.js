// Add code to this file to make function request to send email verification

function sendEmail() {
    // Send email button
}

function resetPassword() {
    // reset password request and switch to login page in here
}

function verifyCode() {
    //Make request to server to verify the code given and then inside request switch page to resetpassword.html
}

var sendEmailButton = document.getElementById("sendEmailButton");
var verifyAndSwitchPage = document.getElementById("verifyCodeButton");
var switchToLoginButton = document.getElementById("resetPasswordButton");

sendEmailButton.addEventListener("click", () => {
    sendEmail()
    window.location.href = "verifycode.html";
});

verifyAndSwitchPage.addEventListener("click", () => {
    verifyCode()
});

switchToLoginButton.addEventListener("click", () => {
    resetPassword()
});