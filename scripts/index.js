const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__open-popup');
console.log(popupCloseButtonElement);
console.log(popupOpenButtonElement);

const openPopup = function() {
  nameInput.value = titleProfile.textContent;
   jobInput.value = subtitleProfile.textContent;
    popupElement.classList.add('popup_opened');
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


    let formElement = document.querySelector('.popup__container');

    let nameInput = document.querySelector('.popup__input_type_name');
    let jobInput = document.querySelector('.popup__input_type_info');


    let titleProfile = document.querySelector('.profile__info-title');
    let subtitleProfile = document.querySelector('.profile__info-subtitle');

    function formSubmitHandler (evt) {
        evt.preventDefault();

        titleProfile.textContent = nameInput.value;
        subtitleProfile.textContent = jobInput.value;
        closePopup();
    }

formElement.addEventListener('submit', formSubmitHandler);
