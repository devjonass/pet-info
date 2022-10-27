import { renderAvatarandPosts } from "../home/index.js";

const renderModalOne = () => {
  const body = document.querySelector("body");

  const divwrapper = document.createElement("div");
  const form = document.createElement("form");
  const divHeader = document.createElement("div");
  const h4 = document.createElement("h4");
  const btnRemove = document.createElement("button");
  const divInputTitle = document.createElement("div");
  const labelTitle = document.createElement("label");
  const inputTitle = document.createElement("input");
  const divTextAreaContent = document.createElement("div");
  const labelContent = document.createElement("label");
  const textAreaContent = document.createElement("textarea");
  const divBtns = document.createElement("div");
  const buttonCancel = document.createElement("button");
  const buttonPublic = document.createElement("button");

  divwrapper.id = "value";
  divwrapper.classList.add("modal_wrapper");
  form.classList.add("modal");
  divHeader.classList.add("header_modal");
  btnRemove.classList.add("btn_remove");
  btnRemove.setAttribute("data-modal", "value");
  divInputTitle.classList.add("title_input");
  divTextAreaContent.classList.add("text_area_content");
  divBtns.classList.add("btns_inputs");

  h4.innerText = "Criando novo post";
  btnRemove.innerText = "X";
  labelTitle.htmlFor = "title";
  labelTitle.innerText = "Título do post";
  inputTitle.type = "text";
  inputTitle.placeholder = "Digite o título aqui...";
  inputTitle.name = "title";
  inputTitle.required = true;

  labelContent.htmlFor = "content";
  labelContent.innerText = "Conteúdo do post";
  textAreaContent.placeholder = "Desenvolva o conteúdo do post aqui...";
  textAreaContent.name = "content";
  textAreaContent.required = true;
  // textAreaContent.type = "text";
  // textAreaContent.placeholder = "Desenvolva o conteúdo do post aqui...";
  // textAreaContent.name = "content";
  // textAreaContent.required = true;

  buttonCancel.type = "submit";
  buttonCancel.innerText = "Cancelar";
  buttonPublic.type = "submit";
  buttonPublic.innerText = "Publicar";

  divHeader.append(h4, btnRemove);
  divInputTitle.append(labelTitle, inputTitle);
  divTextAreaContent.append(labelContent, textAreaContent);
  divBtns.append(buttonCancel, buttonPublic);
  form.append(divHeader, divInputTitle, divTextAreaContent, divBtns);
  divwrapper.append(form);

  body.append(divwrapper);
};

const renderModalTree = () => {
  const body = document.querySelector("body");

  const divwrapper = document.createElement("div");
  const form = document.createElement("form");
  const divHeader = document.createElement("div");
  const h4 = document.createElement("h4");
  const btnRemove = document.createElement("button");
  const divInputTitle = document.createElement("div");
  const divBtns = document.createElement("div");
  const buttonCancel = document.createElement("button");
  const buttonPublic = document.createElement("button");

  divwrapper.id = "value_two";
  divwrapper.classList.add("modal_wrapper");
  form.classList.add("modal_two");
  divHeader.classList.add("header_modal");
  btnRemove.classList.add("btn_remove");
  btnRemove.setAttribute("data-modal-two", "value_two");
  divInputTitle.classList.add("title_input");
  divTextAreaContent.classList.add("text_area_content_two");
  divBtns.classList.add("btns_inputs_two");

  h4.innerText = "Confirmação de exclusão";
  btnRemove.innerText = "X";

  buttonCancel.type = "submit";
  buttonCancel.innerText = "Cancelar";
  buttonPublic.type = "submit";
  buttonPublic.innerText = "Sim, excluir este post";

  divHeader.append(h4, btnRemove);
  divBtns.append(buttonCancel, buttonPublic);
  form.append(divHeader, divInputTitle, divTextAreaContent, divBtns);
  divwrapper.append(form);

  body.append(divwrapper);
};

const eventModal = () => {
  const button = document.querySelectorAll("[data-modal]");

  button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      let value = btn.getAttribute("data-modal");
      document.getElementById(value).classList.toggle("show_modal");
    });
  });
};

export { renderModalOne, eventModal };
