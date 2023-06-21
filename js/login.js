document.getElementById("btn-sumbit").addEventListener("click", function () {
  const userNameFiled = document.getElementById("Username").value;
  const emailFiled = document.getElementById("email").value;
  const passwordFiled = document.getElementById("password").value;
  if (
    userNameFiled === "Rakibul" &&
    emailFiled === "md.rakibul@gmail.com" &&
    passwordFiled === "mehedi123@"
  ) {
    console.log("valid user");
  } else {
    console.log("Invalid user");
  }
});
