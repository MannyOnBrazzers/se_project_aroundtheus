const initialCards = [
  {name: 'Yosemite Valley', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg'},
  {name: 'Lake Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg'},
  {name: 'Bald Mountains', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg'},
  {name: 'Latemar', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg'},
  {name: 'Vanoise National Park', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg'},
  {name: 'Lago di Braies', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg'},
];


const editButton = document.querySelector('.profile__edit-button')
const modalMenu = document.querySelector('.modal')
const modalClose = modalMenu.querySelector('.modal__close')

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const modalTitle = modalMenu.querySelector('#profile-modal-title')
const modalDescription = modalMenu.querySelector('#profile-modal-description')
const modalSubmit = modalMenu.querySelector('.modal__form')

const template = document.querySelector('#element-template').content.firstElementChild
const elementList = document.querySelector('.elements__lists')

// Functions

function openProfileModal(){
  modalTitle.value = profileTitle.textContent
  modalDescription.value = profileDescription.textContent

  modalMenu.classList.add('modal_opened')
}

function closeProfileModal(){
  modalMenu.classList.remove('modal_opened')
}

function submitProfileModal(event){
  event.preventDefault();

  profileTitle.textContent = modalTitle.value
  profileDescription.textContent = modalDescription.value

  closeProfileModal()
}

function getCardElement(data){
  const element = template.cloneNode(true);
  const elementImage = element.querySelector('.elements__image')
  const elementTitle = element.querySelector('.elements__title')

  elementTitle.textContent = data.name;
  elementImage.src = data.link
  elementImage.alt = data.name

  return element
}

// Cards

initialCards.forEach((card) => {
  const cardElement = getCardElement(card)
  elementList.append(cardElement)
})

// Listeners

editButton.addEventListener('click', openProfileModal)
modalClose.addEventListener('click', closeProfileModal)
modalSubmit.addEventListener('submit', submitProfileModal)
