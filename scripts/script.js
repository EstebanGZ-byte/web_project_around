const edit = document.getElementById("header__edit-profile");
const btn = document.getElementById("header__button-edit");
const span = document.getElementsByClassName("close")[0];
const profileEditForm = document.querySelector(".header__edit-profile-form");
const heartBtn = document.querySelectorAll('.content__button-like');
const heartIcon = document.querySelectorAll('.content__icon-heart');
let profileName = document.querySelector(".header__profile-name");
let profileDescription = document.querySelector(".header__profile-trade");
let nameInput = document.querySelector(".header__edit-profile-input_name");
let aboutInput = document.querySelector(".header__edit-profile-input_description");

heartBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    heartIcon[index].classList.toggle('content__icon-heart-black');
  });
});


btn.onclick = function() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
  edit.style.display = "block";
}

span.onclick = function() {
  edit.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == edit) {
      edit.style.display = "none";
  }
}

btn.addEventListener("click", openEditProfile);
span.addEventListener("click", closeEditProfile);

function saveChangeProfile(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;
  openEditProfile();
  closeEditProfile();
}

profileEditForm.addEventListener("submit", saveChangeProfile);

