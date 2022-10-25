const toastLogin = (title, message) => {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("toast-container");

  const icon = document.createElement("img");
  icon.alt = `Mensagem de ${title}`;

  if (title == "Sucesso") {
    container.classList.add("sucessToast");
    icon.src = "../../assets/imgs/verifica.png";
  } else {
    container.classList.add("errorToast");
    icon.src = "../../assets/imgs/463612.png";
  }

  const textContainer = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.innerText = title;
  const span = document.createElement("span");
  span.innerText = message;

  textContainer.append(h3, span);

  container.append(icon, textContainer);

  body.appendChild(container);
};

const toastRegister = (title) => {
  const body = document.querySelector("body");

  const container = document.createElement("div");
  container.classList.add("toast-container_rg");

  const imgAndTitle = document.createElement("div");
  imgAndTitle.classList = "toast_title";

  const icon = document.createElement("img");
  icon.alt = `Mensagem de ${title}`;

  if (title == "Sua conta foi criada com sucesso!") {
    container.classList.add("sucessToast_rg");
    icon.src = "../../assets/imgs/verifica.png";
  }
  const textContainer = document.createElement("div");
  const imgandspan = document.createElement("div");
  imgandspan.classList = "div_texts";

  const a = document.createElement("a");
  a.innerText = "Acessar página de login";
  a.href = "../login/index.html";
  const h3 = document.createElement("h3");
  h3.innerText = title;
  const span = document.createElement("span");
  span.innerText =
    "Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login:";

  imgAndTitle.append(icon, h3);
  span.append(a);
  imgandspan.append(span);

  container.append(imgAndTitle, imgandspan);

  body.appendChild(container);
};

export { toastLogin, toastRegister };
