const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

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