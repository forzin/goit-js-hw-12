import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import {createGalleryCard} from './js/render-functions';
import {fetchPhotos} from './js/pixabay-api';

let lightbox;

let currentPage = 1;

let searchValue = '';

const form = document.querySelector(`.form`);
const inputValue = document.querySelector(`input[type="text"]`);
const gallery = document.querySelector(`.ul-gallery`);
const loader = document.querySelector(`.loader-container`);
const loadMoreButton = document.querySelector(`.load-more-button`);


const searchForm = async event => {
    try {
        
        event.preventDefault();

        searchValue = form.elements.user_value.value.trim();

        const response = await fetchPhotos(searchValue, currentPage);

        currentPage = 1;
        
        if (searchValue === "") {
            iziToast.show({
               message: "Error! Please enter a search term!",
                
               backgroundColor: '#ef4040',
               messageColor: '#fafafb',
               messageSize: '16px',
               messageLineHeight: '150%',
               maxWidth: 432,
                
               position: 'topRight',
               iconUrl: `./img/icon-error.svg`,
            });
            return; 
        }

        if (response.data.hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",

                backgroundColor: '#ef4040',
                messageColor: '#fafafb',
                messageSize: '16px',
                messageLineHeight: '150%',

                maxWidth: 432,
                position: 'topRight',

                iconUrl: `./img/icon-error.svg`,
            });
            return;
        } 
        
        inputValue.value = '';
        const createGallery = response.data.hits.map(img => createGalleryCard(img)).join('');
        gallery.innerHTML = createGallery;
        lightbox.refresh();
        loader.classList.add(`is-hidden`);
        loadMoreButton.classList.remove(`is-hidden`);

        if (gallery.children.length >= response.data.totalHits) {
            loadMoreButton.classList.add(`is-hidden`);
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: ' #4e75ff',
                messageColor: '#fafafb',
                messageSize: '16px',
                messageLineHeight: '150%',
                maxWidth: 432,
                position: 'topRight',
            });
        }

    } catch (err) {
        iziToast.show({
            message: "An error occurred while fetching images. Please try again.",
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
            messageSize: '16px',
            messageLineHeight: '150%',
            maxWidth: 432,
            position: 'topRight',
            iconUrl: `./img/icon-error.svg`,
        });
        loader.classList.add(`is-hidden`);
        console.log(err);
    } 
};

document.addEventListener('DOMContentLoaded', function() {
    lightbox = new SimpleLightbox('.ul-gallery a', {
        captions: true,
        captionDelay: 250,
        animationSpeed: 300,
        captionsData: 'title'
    });
});

const loadButton = async event => {
    try {
        currentPage++;

        const response = await fetchPhotos(searchValue, currentPage);

        const createGallery = response.data.hits.map(img => createGalleryCard(img)).join('');
        gallery.insertAdjacentHTML(`beforeend`, createGallery);
        
        lightbox.refresh();

        const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;

        window.scrollBy({
            top: cardHeight * 3,  
            behavior: 'smooth',   
        });

    } catch (err) {
        iziToast.show({
            message: "An error occurred while fetching images. Please try again.",
            backgroundColor: '#ef4040',
            messageColor: '#fafafb',
            messageSize: '16px',
            messageLineHeight: '150%',
            maxWidth: 432,
            position: 'topRight',
            iconUrl: `./img/icon-error.svg`,
        });
    }
}

form.addEventListener(`submit`, searchForm);
loadMoreButton.addEventListener(`click`, loadButton);