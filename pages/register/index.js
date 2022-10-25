import { register } from "../../scripts/requests.js";

const eventRegister = () => {
  const form = document.querySelector("form");
  const btnBack = document.querySelectorAll(".btn_two");
  const inputs = document.querySelectorAll("input");
  const elements = [...form.elements];

  inputs.forEach((inpt) => {
    inpt.addEventListener("input", () => {
      if (inpt.value == "") {
        elements[4].disabled = true;
      } else {
        elements[4].disabled = false;
      }
    });
  });
  btnBack.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.replace("../login/index.html");
    });
  });
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const body = {};

    elements.forEach((element) => {
      if (element.tagName == "INPUT" && element.value !== "") {
        body[element.id] = element.value;
      }
    });

    await register(body);
  });
};

eventRegister();
