import { login } from "../../scripts/requests.js";

const eventLogin = () => {
  const form = document.querySelector("form");
  const input = document.querySelectorAll(".inpt");
  const btnRegister = document.querySelector(".btn_register");
  const password = document.getElementById("password");
  const elements = [...form.elements];
  btnRegister.addEventListener("click", () => {
    window.location.replace("../register/index.html");
  });
  input.forEach((inpt) => {
    inpt.addEventListener("input", () => {
      if (inpt.value == "") {
        elements[2].disabled = true;
      } else {
        elements[2].disabled = false;
      }
    });
  });
  form.addEventListener("submit", async (ev) => {
    elements[2].innerHTML = "";
    ev.preventDefault();
    const body = {};

    elements.forEach((element) => {
      if (element.tagName == "INPUT" && element.value !== "") {
        body[element.id] = element.value;
        localStorage.setItem("user", JSON.stringify(element));
      }
    });

    let image = document.createElement("img");
    image.classList = "spinner";
    image.src = "../../assets/imgs/spinner.svg";
    elements[2].appendChild(image);
    await login(body);
  });
};

eventLogin();
