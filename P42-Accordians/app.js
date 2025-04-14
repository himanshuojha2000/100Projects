const itemHeaders = document.querySelectorAll(".accordian-item-header");
itemHeaders.forEach((accordian) => {
  accordian.addEventListener("click", collapseAccordian);
  function collapseAccordian() {
    const activeAccordian = document.querySelector(".active");
    if (activeAccordian && activeAccordian !== accordian) {
      activeAccordian.classList.toggle("active");
      activeAccordian.nextElementSibling.computedStyleMap.maxHeight = 0;
    }

    accordian.classList.toggle("active");
    const accordianItemBody = accordian.nextElementSibling;
    if (accordian.classList.contains("active")) {
      accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
      accordianItemBody.style.maxHeight = 0;
    }
  }
});
