const initialCards = [
  {name: 'Yosemite Valley', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg'},
  {name: 'Lake Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg'},
  {name: 'Bald Mountains', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg'},
  {name: 'Latemar', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg'},
  {name: 'Vanoise National Park', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg'},
  {name: 'Lago di Braies', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg'},
];

const modals = document.querySelectorAll(".modal");

// Popups

const editButton = document.querySelector('.profile__edit-button')
const editMenu = document.querySelector('#edit_modal')

const editTitle = editMenu.querySelector('#profile-modal-title')
const editDescription = editMenu.querySelector('#profile-modal-description')
const profileForm = editMenu.querySelector('#edit_submit')

const addButton = document.querySelector('.profile__add-button')
const addMenu = document.querySelector('#add_modal')

const addTitle = addMenu.querySelector('#add-modal-title')
const addLink = addMenu.querySelector('#add-modal-link')
const cardForm = addMenu.querySelector('#add_submit')

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const template = document.querySelector('#element-template').content.firstElementChild
const elementList = document.querySelector('.elements__lists')

const previewImage = document.querySelector(".modal__image");
const previewModal = document.querySelector("#preview_modal");
const previewTitle = document.querySelector(".modal__title");
const previewClose = document.querySelector('#preview_close')

const closeButtons = document.querySelectorAll('.modal__close');

// Functions

function openPopup(popup){
  popup.classList.add('modal_opened')
  document.addEventListener("keydown", closeModalESC);
}

function closePopup(popup){
  popup.classList.remove('modal_opened')
  document.removeEventListener("keydown", closeModalESC);
}

function closeModalOverlay(event) {
  if (event.target.classList.contains("modal")) {
    closePopup(event.target);
  }
}

function closeModalESC(event){
  if (event.key === 'Escape'){
    const popup = document.querySelector(".modal_opened");
    closePopup(popup);
  }
}

function submitProfileForm(event){
  event.preventDefault();

  profileTitle.textContent = editTitle.value
  profileDescription.textContent = editDescription.value

  closePopup(editMenu)
}

function submitCardForm(event){
  event.preventDefault();

  const title = event.target.title.value
  const link = event.target.link.value

  if (!title || !link){
    return
  }

  const card = {name: title, link: link}
  renderCard(card, elementList)

  event.target.reset()

  closePopup(addMenu)
}

function renderCard(cardData, wrapper){
  const cardElement = getCardElement(cardData)
  wrapper.prepend(cardElement)
}

function getCardElement(data){
  const element = template.cloneNode(true);
  const elementImage = element.querySelector('.elements__image')
  const elementTitle = element.querySelector('.elements__title')
  const elementDelete = element.querySelector('.elements__delete')
  const elementLike = element.querySelector('.elements__like-button')

  elementTitle.textContent = data.name;
  elementImage.src = data.link
  elementImage.alt = data.name

  // Delete Button

  elementDelete.addEventListener('click', function(){ element.remove() })

  // Like Button

  elementLike.addEventListener('click', function(){
    elementLike.classList.toggle('elements__like-button-active')
  })

  // Popup

  elementImage.addEventListener('click', () => {
    openPopup(previewModal);
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewTitle.textContent = data.name;
  })

  return element
}

// Cards

initialCards.forEach((card) => { renderCard(card, elementList)})

// Listeners

editButton.addEventListener('click', function(){
  editTitle.value = profileTitle.textContent
  editDescription.value = profileDescription.textContent
  openPopup(editMenu)
})

profileForm.addEventListener('submit', submitProfileForm)
addButton.addEventListener('click', function(){ openPopup(addMenu) })
cardForm.addEventListener('submit', submitCardForm)

closeButtons.forEach((button) => {
  const popup = button.closest('.modal');
  button.addEventListener('click', () => closePopup(popup));
});

modals.forEach((modal) => {
  modal.addEventListener("click", closeModalOverlay);
});
