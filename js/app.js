import galleryItems from "./gItems.js";

const galleryWindow = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeLightbox = document.querySelector('.lightbox__button[data-action="close-lightbox"]');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const gallerylink = document.querySelector('.gallery__link');

const createGalleryMarkup = creatGallery(galleryItems);

galleryWindow.insertAdjacentHTML('beforeend', createGalleryMarkup);

galleryWindow.addEventListener('click', openModal);
closeLightbox.addEventListener('click', closeModal);
lightboxOverlay.addEventListener('click', closeModal);

function creatGallery(items) {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
     
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
  
   </li>`;}).join('');
};
 
function openModal(evt){

 if(!evt.target.classList.contains('gallery__image')) {return};
   lightboxImage.setAttribute("src", evt.target.dataset.source);
   lightbox.classList.add("is-open");
   window.addEventListener('keydown',closeModalEscChangePic);
};

function closeModal(){
  lightbox.classList.remove("is-open");
  lightboxImage.setAttribute("src", "");
  window.removeEventListener('keydown',closeModalEscChangePic); 
};

function closeModalEscChangePic(evt){
  if (evt.key === 'Escape'){
    lightbox.classList.remove("is-open");
    window.removeEventListener('keydown',closeModalEscChangePic);
   }; 

const arrOfLinksPic = galleryItems.map(item => item.original);
  if (evt.key === 'ArrowRight'){
  const newSrcAttribut = (arrOfLinksPic.indexOf(lightboxImage.getAttribute("src")) !== (arrOfLinksPic.length-1))?
  arrOfLinksPic.indexOf(lightboxImage.getAttribute("src")) + 1 : 0;
  lightboxImage.setAttribute("src",arrOfLinksPic[newSrcAttribut]); 
  };

  if (evt.key === 'ArrowLeft'){
  const newSrcAttribut = (arrOfLinksPic.indexOf(lightboxImage.getAttribute("src")) === 0)?
  (arrOfLinksPic.length-1) : arrOfLinksPic.indexOf(lightboxImage.getAttribute("src")) - 1;
  lightboxImage.setAttribute("src",arrOfLinksPic[newSrcAttribut]); 
  };
};