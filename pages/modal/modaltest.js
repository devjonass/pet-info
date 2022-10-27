const openModal = (children) => {
  const body = document.querySelector("body");

  const backgroundContainer = document.createElement("section");
  const mainConatiner = document.createElement("section");
  const closeModalButton = document.createElement("button");

  backgroundContainer.classList.add("modal-background");
  mainConatiner.classList.add("modal-container");
  closeModalButton.classList.add("modal-close");

  closeModalButton.innerText = "X";

  backgroundContainer.addEventListener("click", (event) => {
    const { className } = event.target;
    if (className === "modal-background" || className === "modal-close") {
      backgroundContainer.remove();
    }
  });

  mainConatiner.appendChild(closeModalButton);
  mainConatiner.append(children);
  backgroundContainer.appendChild(mainConatiner);
  body.appendChild(backgroundContainer);
};

const openModalTwo = (children) => {
  const body = document.querySelector("body");

  const backgroundContainer = document.createElement("section");
  const mainConatiner = document.createElement("section");
  const closeModalButton = document.createElement("button");

  backgroundContainer.classList.add("modal-background_two");
  mainConatiner.classList.add("modal-container_two");
  closeModalButton.classList.add("modal-close_two");

  closeModalButton.innerText = "X";

  backgroundContainer.addEventListener("click", (event) => {
    const { className } = event.target;
    if (
      className === "modal-background_two" ||
      className === "modal-close_two"
    ) {
      backgroundContainer.remove();
    }
  });

  mainConatiner.appendChild(closeModalButton);
  mainConatiner.append(children);
  backgroundContainer.appendChild(mainConatiner);
  body.appendChild(backgroundContainer);
};

export { openModal, openModalTwo };
