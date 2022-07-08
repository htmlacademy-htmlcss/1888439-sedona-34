'use strict';

const closeModal = (evt) => {
  evt.preventDefault();

  document.body.classList.remove('modal-open')

  const modalContainer = evt.target.closest('.modal-container');
  modalContainer.classList.add('modal-container-close');

  evt.target.removeEventListener('click', closeModal);
};

const openModal = (evt) => {
  evt.preventDefault();

  document.body.classList.add('modal-open')

  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.remove('modal-container-close');

  const closeButton = modalContainer.querySelector('.modal-close-button');
  closeButton.addEventListener('click', closeModal);
};

const openModalButton = document.querySelector('.booking .button[href="catalog.html"]');
openModalButton.addEventListener('click', openModal);
