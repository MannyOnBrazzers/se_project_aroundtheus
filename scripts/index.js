let initialCards = [
  {name: 'Yosemite Valley', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg'},
  {name: 'Lake Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg'},
  {name: 'Bald Mountains', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg'},
  {name: 'Latemar', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg'},
  {name: 'Vanoise National Park', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg'},
  {name: 'Lago di Braies', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg'},
];


let editButton = document.querySelector('.profile__edit-button')

editButton.addEventListener('click', function () {
  let menu = document.querySelector('.modal')
  let closeButton = menu.querySelector('.modal__close')

  menu.classList.add('modal__opened')

  closeButton.addEventListener('click', function(){
    menu.classList.remove('modal__opened')
  });
});