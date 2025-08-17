// var header = document.querySelector("#header");

// window.addEventListener("scroll", () => {
//   var heightWeb = window.scrollY || window.pageYOffset;
//   console.log(heightWeb);
//   if (heightWeb >= 500) {
//     header.classList.add("header__active-shadow");
//   } else {
//     header.classList.remove("header__active-shadow");
//   }
// });
var listTab = document.querySelectorAll(".tab__title");
var tab__Content = document.querySelectorAll(".tab__content");
listTab.forEach((items, index) => {
  items.onclick = () => {
    // remove class
    listTab.forEach((item) => {
      item.classList.remove("tab__title-active");
    });
    items.classList.add("tab__title-active");
    // add class hiện content
    tab__Content.forEach((items) => {
      items.style.display = "none";
    });
    tab__Content[index].style.display = "block";
  };
});
