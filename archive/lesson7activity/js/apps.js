const imagesToLoad = document.querySelectorAll("[data-src]");
console.log(imagesToLoad)

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
  img.onload = function () {
    img.removeAttribute('data-src');
  };
}
const imageOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
};

const imgObserver = new IntersectionObserver((items, observer) => {
  items.forEach(item => {
    if (!item.isIntersecting) {
      console.log("foop " + item);
      return;
    }
    else {
      preloadImage(item.target);
      observer.unobserve(item.target);

    }
  });
}, imageOptions);


imagesToLoad.forEach(image => {
  imgObserver.observe(image);
});


// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {image.removeAttribute('data-src');};
// };

//   if('IntersectionObserver' in window) {
//     const imgObserver = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//        });
//     }, imageOptions);

//     imagesToLoad.forEach((img) => {
//       imgObserver.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//       loadImages(img);
//     });
//   }
