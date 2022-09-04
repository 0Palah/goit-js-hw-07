import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

let instance = null;
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

// ф-ціяі для заборони дефолтного переходу, виводу посилання на оригынал, модалка

const onImgClick = (evt) => {
  evt.preventDefault();

  const { target } = evt;
  // змінна з посиланням на оригінал
  const outputImgSource = target.dataset.source;
  console.log(outputImgSource);

  instance = basicLightbox.create(`
  <div class="modal">
    <img src="${outputImgSource}" width="800" height="600">
  </div>`);

  instance.show();

  return outputImgSource;
};

//Проблема тут з  const visible = instance.visible();

const isModalOpen = (evt) => {
  const { code } = evt;
  console.log(evt);
  const visible = instance.visible();
  if (!visible) {
    console.log(visible);
    return;
  }
  if (code === "Escape") {
    instance.close();
  }
};

// делегація прослуховування

galleryListEl.addEventListener("click", onImgClick);
galleryListEl.addEventListener("keydown", isModalOpen);

console.log(onImgClick);
console.log(makeGalleryArr);
console.log(galleryItems);
