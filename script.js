const cardContainer = document.querySelector(".card-container");

window.onload = function () {
  const moreBtns = cardContainer.querySelectorAll(".see-more-btn");

  moreBtns.forEach((moreBtn) => {
    const card = moreBtn.closest(".card");
    const textContent = card.querySelector(".text");

    if (textContent.scrollHeight === textContent.clientHeight) {
      moreBtn.style.display = "none"; // Hide the "See More" button if the text content is not overflowing
      textContent.style.height = "fit-content"; // Allow the text content to expand naturally
    } else {
      card.classList.add("gradient"); // Add gradient class to the card if the text content overflows
    }
  });
};

cardContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches(".see-more-btn")) {
    const card = target.closest(".card");
    const textContent = card.querySelector(".text");
    const moreBtn = card.querySelector(".see-more-btn");

    card.classList.toggle("active");
    card.classList.toggle("gradient");

    if (card.classList.contains("active")) {
      moreBtn.innerHTML = "See Less"; // Change the button text to "See Less" when expanded
      textContent.style.height = textContent.scrollHeight + "px"; // Expand the text content to its full height
    } else {
      moreBtn.innerHTML = "See More"; // Change the button text to "See More" when collapsed
      textContent.style.height = "100px"; // Set a fixed height for the collapsed text content
    }
  }
});
