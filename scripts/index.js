document.addEventListener("DOMContentLoaded", () => {
const edit = document.getElementById("header__edit-profile");
const btn = document.getElementById("header__button-edit");
const closeButton = edit.querySelector(".close");
const profileEditForm = document.getElementById("header__edit-profile-form");
const heartBtn = document.querySelectorAll('.content__button-like');
const heartIcon = document.querySelectorAll('.content__icon-heart');
const saveButton = document.querySelector('.header_edit-profile-button');
const nameInput = edit.querySelector(".header__edit-profile-input_name");
const aboutInput = edit.querySelector(".header__edit-profile-input_description");
const profileName = document.querySelector(".header__profile-name");
const profileDescription = document.querySelector(".header__profile-trade");

    heartBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    heartIcon[index].classList.toggle('content__icon-heart-black');
  });
});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
    edit.style.display = "none";

    return false;
  };

    btn.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileDescription.textContent;
    edit.style.display = "block";
  });

  closeButton.addEventListener('click', () => {
    edit.style.display = "none";
  });

  profileEditForm.addEventListener('submit', handleSubmit);

  window.addEventListener('click', (e) => {
    if (e.target === editModal) {
      edit.style.display = "none";
    }
  });

});



