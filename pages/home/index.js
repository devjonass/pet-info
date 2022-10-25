import { getLocalStorage } from "../../scripts/localStorage.js";
import { getProfiles } from "../../scripts/requests.js";
import { getPosts } from "../../scripts/requests.js";

const verifyPermission = () => {
  const user = getLocalStorage();

  if (user == "") {
    window.location.replace("../login/index.html");
  }
};

verifyPermission();

const renderAvatarandPosts = async () => {
  const user = await getProfiles();
  const post = await getPosts();
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  post.forEach((element) => {
    const ul = document.querySelector(".session_posts");
    const li = document.createElement("li");
    li.classList = "div_daddy";
    const divOne = document.createElement("div");
    divOne.classList = "div_title";
    const imgPost = document.createElement("img");
    imgPost.classList = "img_post";
    const nameTitle = document.createElement("p");
    nameTitle.classList = "name_post";
    const small = document.createElement("small");
    small.innerText = "|";
    const data = document.createElement("span");

    const divTwo = document.createElement("div");
    divTwo.classList = "div_btns";
    const btnOne = document.createElement("button");
    btnOne.innerText = "Editar";
    const btnTwo = document.createElement("button");
    btnTwo.innerText = "Excluir";

    const paragraphOne = document.createElement("p");
    paragraphOne.classList = "p_1";
    const paragraphTwo = document.createElement("p");
    paragraphTwo.classList = "p_2";
    const btnAcess = document.createElement("button");
    btnAcess.classList = "btn_acess";

    const img = document.querySelector(".img_header");
    img.src = user.avatar;
    imgPost.src = user.avatar;
    nameTitle.innerText = user.username;
    const date = new Date(element.createdAt);
    let month = months[date.getMonth()];
    data.innerText = `${month} de 2022`;
    paragraphOne.innerText = element.title;
    paragraphTwo.innerText = `${element.content.substring(0, 145)}..`;
    btnAcess.innerText = "Acessar publicação";

    divOne.append(imgPost, nameTitle, small, data);
    divTwo.append(btnOne, btnTwo);

    li.append(divOne, divTwo, paragraphOne, paragraphTwo, btnAcess);

    ul.appendChild(li);
  });
};

renderAvatarandPosts();
