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

// ф-ція для виводу посилання і заборони дефолтного переходу

const onImgClick = (evt) => {
  const { target } = evt;
  // змінна з посиланням на оригінал
  const outputImgSource = target.dataset.source;
  console.log(outputImgSource);

  evt.preventDefault();
  return outputImgSource;
};

// делегація прослуховування

galleryListEl.addEventListener("click", onImgClick);

console.log(onImgClick);
console.log(makeGalleryArr);
console.log(galleryItems);
