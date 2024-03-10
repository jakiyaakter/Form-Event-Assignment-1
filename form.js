const form = document.querySelector('form');
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const userName = document.querySelector("#userName");
const emailAddress = document.querySelector("#exampleInputEmail");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPsw");

form.addEventListener("submit", formHandler);


function formHandler(e){
    e.preventDefault();
    // console.log(email.value);
    // console.log(password.value);

    const formInfo = {
        FistName: firstName.value,
        LastName: lastName.vlaue,
        UserName: userName.value,
        Email: emailAddress.value,
        password: password.value,
        ConfirmPassword: confirmPassword.value
    }

    console.log(formInfo);

    firstName.vlue = "",
    lastName.value = "",
    userName.value = "",
    emailAddress.value = "",
    password.value = "",
    password.value = ""
}
