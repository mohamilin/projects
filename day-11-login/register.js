// buat function async await register
const register = async () => {
  console.log("register");

  let nameInput = document.getElementById("nama").value;
  let userNameInput = document.getElementById("username").value;
  let passwordInput = document.getElementById("password").value;

  console.log("isi inputan", nameInput, userNameInput, passwordInput);

  let userData = {
    nama: nameInput,
    username: userNameInput,
    password: passwordInput,
  };
  // post data user

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  let response = await fetch(
    "https://5f51a6865e98480016123bdd.mockapi.io/users/",
    options
  );
  let result = await response.json();
  console.log(result);
};
