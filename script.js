let navbar = document.querySelector(".header .navbar");
let menubtn = document.querySelector("#menu-btn");

menubtn.onclick = () => {
  menubtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true, // Enable loop
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Set autoplay delay
    disableOnInteraction: false, // Continue autoplay after interaction
  },
  effect: "fade", // Optional: add an effect like fade
});

var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
    },

    1000: {
      slidesPerView: 3,
    },
  },
});

/*menu*/
var swiper = new Swiper(".menu-sliders", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let previewContainer = document.querySelector(".food-preview-container");
let previewBox = previewContainer.querySelectorAll(".food-preview");

document.querySelectorAll(".food .slide").forEach((food) => {
  food.onclick = () => {
    previewContainer.style.display = "flex";
    let name = food.getAttribute("data-name");
    previewBox.forEach((preveiw) => {
      let target = preveiw.getAttribute("data-target");

      if (name == target) {
        preveiw.classList.add("active");
      }
    });
  };
});

if (sessionStorage.getItem("showPreview") == "false") {
  previewContainer.style.display = "none";
}

previewContainer.querySelector("#close-preview").onclick = () => {
  if (sessionStorage.getItem("showPreview") == "false") return;
  previewContainer.style.display = "none";
  sessionStorage.setItem("showPreview", "false");
  console.log("🚀 ~ previewContainer.querySelector ~ false:", false);

  previewBox.forEach((close) => {
    close.classList.remove("active");
  });
};

var swiper = new Swiper(".blogs-sliders", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
    },

    1000: {
      slidesPerView: 3,
    },
  },
});
