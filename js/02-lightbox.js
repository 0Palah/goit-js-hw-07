import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
  const galleryCard = `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
  return galleryCard;
};

const makeGalleryArr = galleryItems.map((el) => makeGalleryCard(el));
// console.log(makeGalleryArr);
// console.log(galleryListEl);
galleryListEl.insertAdjacentHTML("beforeend", makeGalleryArr.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
