const initialCards = [
  {name: 'Yosemite Valley', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg'},
  {name: 'Lake Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg'},
  {name: 'Bald Mountains', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg'},
  {name: 'Latemar', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg'},
  {name: 'Vanoise National Park', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg'},
  {name: 'Lago di Braies', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg'},
];

// Popups

const editButton = document.querySelector('.profile__edit-button')
const editMenu = document.querySelector('#edit_modal')
const editClose = document.querySelector('#edit_close')

const editTitle = editMenu.querySelector('#profile-modal-title')
const editDescription = editMenu.querySelector('#profile-modal-description')
const editSubmit = editMenu.querySelector('#edit_submit')

const addButton = document.querySelector('.profile__add-button')
const addMenu = document.querySelector('#add_modal')
const addClose = document.querySelector('#add_close')

const addTitle = addMenu.querySelector('#add-modal-title')
const addLink = addMenu.querySelector('#add-modal-link')
const addSubmit = addMenu.querySelector('#add_submit')

// Other

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const template = document.querySelector('#element-template').content.firstElementChild
const elementList = document.querySelector('.elements__lists')

// Functions

function openPopup(popup){
  addTitle.value = ''
  addLink.value = ''
  editTitle.value = profileTitle.textContent
  editDescription.value = profileDescription.textContent

  popup.classList.add('modal_opened')
}

function closePopup(popup){
  popup.classList.remove('modal_opened')
}

function submitEditModal(event){
  event.preventDefault();

  profileTitle.textContent = editTitle.value
  profileDescription.textContent = editDescription.value

  closePopup(editMenu)
}

function submittAddModal(event){
  event.preventDefault();

  const title = event.target.title.value
  const link = event.target.link.value

  if (!title || !link){
    return
  }

  const card = {name: title, link: link}
  renderCard(card, elementList)

  closePopup(addMenu)
}

function openPreview(popup) {
  popup.classList.add("modal_opened");
}

function closePreview(popup){
  popup.classList.remove("modal_opened");
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

  const previewImage = document.querySelector(".modal__image");
  const previewModal = document.querySelector("#preview_modal");
  const previewTitle = document.querySelector(".modal__title");
  const previewClose = document.querySelector('#preview_close')

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
    openPreview(previewModal);
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewTitle.textContent = data.name;
  })

  previewClose.addEventListener('click', () => {
    closePreview(previewModal)
  })

  return element
}

// Cards

initialCards.forEach((card) => { renderCard(card, elementList)})

// Listeners

editButton.addEventListener('click', function(){ openPopup(editMenu) })
editClose.addEventListener('click', function(){ closePopup(editMenu) })
editSubmit.addEventListener('submit', submitEditModal)

addButton.addEventListener('click', function(){ openPopup(addMenu) })
addClose.addEventListener('click', function(){ closePopup(addMenu) })
addSubmit.addEventListener('submit', submittAddModal)
