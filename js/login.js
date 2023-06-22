document.getElementById("btn-sumbit").addEventListener("click", function () {
  const userNameFiled = document.getElementById("Username").value;
  const emailFiled = document.getElementById("email").value;
  const passwordFiled = document.getElementById("password").value;
  if (
    userNameFiled === "Rakibul" &&
    emailFiled === "md.rakibul@gmail.com" &&
    passwordFiled === "mehedi123@"
  ) {
    window.location.href = "http://127.0.0.1:5500/Bank/bank.html";
  } else {
    alert(
      "Please provide correct information, We are getting some problem with your information"
    );
  }
});
