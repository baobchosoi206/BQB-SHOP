// console.log("bảo đẹp trai");

const listImg = ["slider_1.webp", "slider_2.webp"];
var slider = document.querySelector("#slider-js__img");
var indexImg = document.querySelectorAll(".slider__indexImg-items-btn");
var currenIndex = 0;

setInterval(() => {
  currenIndex++;
  if (currenIndex == listImg.length) {
    currenIndex = 0;
  }

  slider.style.opacity = 0;
  slider.style.transition = "all 0.4s";
  setTimeout(() => {
    slider.style.opacity = 1;
    slider.src = `images/banner/${listImg[currenIndex]}`;
  }, 200);

  // add class border-color
  indexImg.forEach((items, index) => {
    items.classList.toggle("active-slider__js", index === currenIndex);
  });
}, 10000);

// close box ship top
var btnClose = document.querySelector("#freeship__close");
var freeship = document.querySelector("#freeship");

btnClose.onclick = () => {
  freeship.style.left = "100%";
  freeship.style.height = "0px";
  setInterval(() => {
    freeship.style.display = "none";
  }, 500);
};

//mảng Img
var listImg__after = [
  "hv_1-d30ef3382f6444c7a7d333bb0a0152fc-large.webp",
  "hv_2-10-4-d1a1d91bb19b454db88accd5baaedd88-large.webp",
  "hv_3-product8-777066ec-c6a3-46a7-a2fc-0c6092eec243-2000x-01f733e5ed38488190ff756c4ec71d93.webp",
  "hv_4-2-3-4a49ba5f8a06422d9bbd84ec7d4f3a8c-large.webp",
  "1_1img-3561-1296x-fef3b91638234f2088f2be987bea88f6-large.webp",
  "1_2fmb-014-cfd66e18-8194-46e1-b716-4aed6db0e642-1296x-6da0ae1b0fde40a38051899f098b553c-large.webp",
  "1_3xtouring-handlebar-harness-3-1296x-c20842ae29964a928146e582ad9c3563-large.webp",
  "1_4img-0247-1296x-043b6a9d57f34cbaa6c7cb73cb674c19-large.webp",
  "1_5wxfofmfhzkzotcxqd4bz-96f928565d9d45d7bea5414adf43025d-large.webp",
  "1_6f4nmolhe02szlbnm7mt1-58795f7eb8ca44f8a730579f626db4bc-large.webp",
  "1_7frame-24-68b987dcf5f948b686151426b1f9e8d6-large.webp",
  "1_8o8d8nc1ehzhoswucu9hn-16635221d8a44ac8ac644787aaa4a771-large.webp",
];

var listImg__before = [
  "11-1-1a1526617dea4d76a4008602b4f267ae.webp",
  "10-1-e3e40a3c3bce4441afc2a1b791712fd8.webp",
  "product7-ded119fb-87ab-4bf8-b95b-34fa0c99bcb2-2000x-71b845eb47424dd89943b6bf36b0f662.webp",
  "2-1-b7ae5beb3d7b4ed78af35456402e4081.webp",
  "1wohoxtouringdrybag6-1296x-0f6eb4af893443d4b233f19bb40c6c1e.webp",
  "2woho-xtouring-full-frame-bag-dry-l-2-1296x-1e7bc92499ee48d28f7bf97bfcccc5c1.webp",
  "3xtouringhandlebarharness7-1296x-2e3074d3e3ce4641910e26ab1d4619d6.webp",
  "4img-8721-1296x-99656b9e6f0a4a6cbe92e14414090835.webp",
  "5f1iheuebpnct8dbvssji-ec060b84060d4ce2b106e61fe0e9c8bb.webp",
  "6i16enkcdvhwrvr2knxqn-a7ac3ee76e3e45dca0cfbe0096776420.webp",
  "7uctlxv25nympfnq4nccv-7e0d68be3ec44cbbaa235c33663febcc.webp",
  "8cc4l1xabf1tqbib8ofka-8c998cf8d63a45d997cd9c3419eacac1.webp",
];

// menu ===============
// var test = document.querySelectorAll(".navbar__items");

var navbarArr__right = document.querySelector("#navbar-arr__right");
var navbarArr__left = document.querySelector("#navbar-arr__left");
var listMenu__heihgt = document.querySelector("#navbar-fullList");
var listItems = document.querySelectorAll(".navbar__items");

let isClickable = false; // Biến trạng thái

function pointerArr__right() {
  var height__menu = listMenu__heihgt.offsetHeight;
  // console.log(height__menu);

  if (height__menu > 60) {
    if (!isClickable) {
      navbarArr__right.style.cursor = "pointer";
      navbarArr__right.style.color = "black";
      isClickable = true; // Đặt trạng thái là có thể nhấn

      // Gán sự kiện click cho nút
      navbarArr__right.onclick = () => {
        listMenu__heihgt.style.transform = `translateY(${-listItems[0]
          .offsetHeight}px)`;
        navbarArr__right.style.color = "rgb(173, 173, 173)";
        navbarArr__right.style.cursor = "not-allowed";
        //
        navbarArr__left.style.cursor = "pointer";
        navbarArr__left.style.color = "black";
      };

      navbarArr__left.onclick = () => {
        listMenu__heihgt.style.transform = `translateY(0px)`;
        navbarArr__left.style.color = "rgb(173, 173, 173)";
        navbarArr__left.style.cursor = "not-allowed";
        navbarArr__right.style.color = "black";
        navbarArr__right.style.cursor = "pointer";
      };
    }
  } else {
    if (isClickable) {
      console.log(height__menu);
      navbarArr__left.style.cursor = "not-allowed";
      navbarArr__right.style.cursor = "not-allowed";
      navbarArr__right.style.color = "rgb(173, 173, 173)";
      isClickable = false;

      //xóa sk click
      navbarArr__right.onclick = null;
      navbarArr__left.onclick = null;
    }
  }
}

window.addEventListener("resize", pointerArr__right);
pointerArr__right();

//test cuộn trang

var header = document.querySelectorAll(".header");
window.addEventListener("scroll", () => {
  var heightWeb = window.scrollY || window.pageYOffset;
  // console.log(heightWeb);
  header.forEach((items) => {
    if (heightWeb >= 400) {
      items.classList.add("header__active-shadow");
    } else {
      items.classList.remove("header__active-shadow");
    }
  });
});

// test click BTN phần phụ kiện xe
var btnPkxe = document.querySelectorAll(".bicycle-equipment__optional");
var dkRotate = true;
btnPkxe.forEach((items) => {
  items.onclick = () => {
    if (dkRotate) {
      items.style.transform = "translate(-50%,-50%) rotate(45deg)";
      // test
      alert("có cái nịt");
    } else {
      items.style.transform = "translate(-50%,-50%) rotate(0deg)";
    }
    dkRotate = !dkRotate;
  };
});

// menu mobile
var menuBtn = document.querySelectorAll(".menu-bar");
var menuMobile = document.querySelectorAll(".mobile-menu");
var menu__overlay = document.querySelectorAll(".menu-overlay");
menuBtn.forEach((items) => {
  items.onclick = () => {
    menuMobile.forEach((items) => {
      items.classList.add("menuMobi__active");
    });
    menu__overlay.forEach((items) => {
      items.classList.add("block__im");
    });
  };
  // overlay
  menu__overlay.forEach((items) => {
    items.onclick = () => {
      menuMobile.forEach((items) => {
        items.classList.remove("menuMobi__active");
      });
      menu__overlay.forEach((items) => {
        items.classList.remove("block__im");
      });
    };
  });
});

// video trang inndext test test
var items__video = document.querySelectorAll(".video__items-child");
var btn__close = document.querySelector("#menu-video__close");
var video__click = document.querySelector("#video-click");
var video__run = document.querySelector("#video__run");
items__video.forEach((items) => {
  items.onclick = () => {
    //
    video__click.style.display = "block";
    video__run.style.display = "block";
    video__run.src = "https://www.youtube.com/embed/fYDtG2-b4tA";
  };
});
btn__close.onclick = () => {
  video__click.style.display = "none";
  video__run.style.display = "none";
  //tạm test xóa src khi ẩn
  video__run.src = "";
};
