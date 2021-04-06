/////////////__________________________________________________LAZY LOAD(data-lazy)
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const src = entry.target.dataset.lazy;
        const entryItem = entry.target;

        if (src.endsWith("png")) {
          entryItem.src = src;
          entryItem.addEventListener("load", () => {
            entryItem.classList.remove("loading");
            entryItem.classList.add("fadeIn");
            return void 0;
          });
        }

        if (src.endsWith("jpg")) {
          entryItem.src = src;
          entryItem.addEventListener("load", () => {
            entryItem.classList.remove("loading");
            entryItem.classList.add("fadeIn");
            return void 0;
          });
        }

        entryItem.childNodes.forEach(item => {
          const showItem = () => {
            item.addEventListener("load", () => {
              entryItem.classList.remove("loading");
              entryItem.classList.add("fadeIn");
            });
          };
          if (item.tagName == "IMG") {
            item.src = src + ".jpg";
            showItem();
          } else if (item.tagName == "SOURCE") {
            item.srcset = src + ".webp";
            showItem();
          }
        });
        observer.disconnect();
      }
    });
  }, {
    margin: 200
  });
  io.observe(target);
};
document.querySelectorAll("[data-lazy]").forEach(lazyLoad);

/////////////_________________________________________________________QUOTE-SWIPER
const swiperOptions = {
  init: false,
  updateOnWindowResize: true,
  loop: true,
  speed: 700,
  slidesPerView: 1, // or 'auto'
  spaceBetween: 100,
  centeredSlides: true,
  effect: 'coverflow', // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: 50, // Slide rotate in degrees
    stretch: 0, // Stretch space between slides (in px)
    depth: 100, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows: false, // Enables slides shadows
  },
  grabCursor: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 200
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Events
  on: {
    imagesReady: function () {
      this.el.classList.remove('loading');
    }
  }
};

const mySwiper = new Swiper('.swiper__qoute-upper', swiperOptions);
mySwiper.init();


const mySwiper1 = new Swiper('.swiper__qoute-lower', swiperOptions);
mySwiper1.init();