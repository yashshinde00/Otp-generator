const randomPassword = () => {
  let digit = "0123456789";
  let otp = "";

  for (i = 0; i < 4; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  document.getElementById("otpdisplay").innerText = otp;
};

document.getElementById("btn").addEventListener("click", randomPassword);
window.addEventListener("load", randomPassword);
