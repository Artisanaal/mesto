const popupUser = document.querySelector('.popup_type_user');
const buttonEditProfile = document.querySelector('.profile__edit-btn');
const formElement = document.querySelector('.popup__container');
const closeBtnProfile = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_info');
const titleProfile = document.querySelector('.profile__info-title');
const subtitleProfile = document.querySelector('.profile__info-subtitle');

function openPopup(item) {
    item.classList.add('popup_opened');
}

function closePopup(item) {
    item.classList.remove('popup_opened');
}

function openPopupProfile() {
    openPopup(popupUser);
    nameInput.value = titleProfile.textContent;
    jobInput.value = subtitleProfile.textContent;
}

function closeButtonProfile() {
    closePopup(popupUser);
}

buttonEditProfile.addEventListener('click', openPopupProfile);
closeBtnProfile.addEventListener('click', closeButtonProfile);

    function formSubmitHandler (evt) {
        evt.preventDefault();
        titleProfile.textContent = nameInput.value;
        subtitleProfile.textContent = jobInput.value;
        closePopup(popupUser);
    }

formElement.addEventListener('submit', formSubmitHandler);

function likeButtonClick(evt) {
    evt.target.classList.toggle('element__like-active');
}

const popupPlace = document.querySelector('.popup_type_add_new_card');
const popupCloseButtonPlace = document.querySelector('.popup__close-button-card');
const placeTitleInput = document.querySelector('.popup__input_type_title');
const placeLinkInput = document.querySelector('.popup__input_type_link');
const btnOpenCardPopup = document.querySelector('.profile__btn-add');

btnOpenCardPopup.addEventListener('click', openPopupPlace);

function closePopupPlace() {
    closePopup(popupPlace);
}
popupCloseButtonPlace.addEventListener('click', closePopupPlace);

function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    const newCard = createCard({"name":placeTitleInput.value , "link":placeLinkInput.value });
    cardsContainer.prepend(newCard);
    closePopupPlace();
}


const formElementPlace = document.querySelector('.popup__container-add-card');
formElementPlace.addEventListener('submit', handlePlaceFormSubmit);

function openPopupPlace() {
    openPopup(popupPlace);
    formElementPlace.reset();

}

const popupImage = document.querySelector('.popup_type_image');
const popupCloseButtonImage = document.querySelector('.popup__close_type_image');

function closePopupImage() {
    closePopup(popupImage);
}

const popupImageElement = document.querySelector('.popup__image');

function openPopupImage(evt) {
    popupImageElement.src = evt.currentTarget.closest('.element__image').src
    popupImageElement.alt = evt.currentTarget.closest('.element__image').alt
    document.querySelector('.popup__caption').textContent = evt.currentTarget.closest('.element__image').alt
    openPopup(popupImage);
}

popupCloseButtonImage.addEventListener('click', closePopupImage);


function deleteCard(event) {
    event.currentTarget.closest('.element').remove()
}

const cardsContainer = document.querySelector('.elements__container');
const template = document.querySelector('.card-template').content.querySelector('.element');

function createCard(cardData) {
    const cardTemplate = template.cloneNode(true);
    cardTemplate.querySelector('.element__title').textContent = cardData.name;
    const image = cardTemplate.querySelector('.element__image');
    const cardLikeButton = cardTemplate.querySelector('.element__like');
    cardLikeButton.addEventListener('click', likeButtonClick);
    image.alt = cardData.name;
    image.src = cardData.link;
    cardTemplate.querySelector('.element__like').addEventListener('click', likeButtonClick)
    image.addEventListener('click', openPopupImage)
    cardTemplate.querySelector('.element__delete-card').addEventListener('click',deleteCard)
    return cardTemplate;
}

function renderInitialCards() {
    initialCards.forEach(item => {
        const newCard = createCard(item);
        cardsContainer.prepend(newCard)
    });
}
renderInitialCards()