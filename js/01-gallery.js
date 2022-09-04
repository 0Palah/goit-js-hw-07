import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

// Розмітка картки

const makeGalleryCard = ({ preview, original, description } = {}) => {
  const galleryCard = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

  return galleryCard;
};

// Масив розміток карток

const makeGalleryArr = galleryItems.map((el) => {
  return makeGalleryCard(el);
});

// Перетворення масиву розміток карток у один рядок і вставка у документ

galleryListEl.insertAdjacentHTML("beforeend", makeGalleryArr.join(""));

let instance = null;
// ф-ціяі для заборони дефолтного переходу, виводу посилання на оригынал, модалка

const openModal = (evt) => {
  evt.preventDefault();

  const { target } = evt;

  if (target.nodeName !== "IMG") {
    return;
  }
  // змінна з посиланням на оригінал
  const outputImgSource = target.dataset.source;
  console.log(outputImgSource);

  instance = basicLightbox.create(`
    <img src="${outputImgSource}" width="800" height="600">
    `);
  instance.show();
  document.addEventListener("keydown", closeModalEsc);
};

function closeModalEsc(evt) {
  const { code } = evt;
  const visible = basicLightbox.visible();
  if (!visible) {
    return document.removeEventListener("keydown", closeModalEsc);
  }
  console.log("closeModalEsc", evt);
  if (code === "Escape") {
    instance.close();
  }
}

galleryListEl.addEventListener("click", openModal);

console.log(openModal);
console.log(makeGalleryArr);
console.log(galleryItems);
