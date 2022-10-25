import { toastLogin, toastRegister } from "./toast.js";
import { getLocalStorage } from "./localStorage.js";

const baseUrl = "http://localhost:3333/";

async function login(body) {
  try {
    const request = await fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok == true) {
      const response = await request.json();
    
      toastLogin("Sucesso", "Login feito com sucesso");

      localStorage.setItem("user", JSON.stringify(response));

      setTimeout(() => {
        window.location.replace("../home/index.html");
      }, 4000);
    } else {
      toastLogin("Erro!", "Algo deu errado");
    }
  } catch (error) {
    toastLogin("Erro!", "Algo deu errado");
  }
}
async function register(body) {
  try {
    const request = await fetch(`${baseUrl}users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (request.ok == true) {
      toastRegister("Sua conta foi criada com sucesso!");
    }
  } catch (error) {
    console.log(error);
  }
}
async function getProfiles() {
  const localStorage = getLocalStorage();
  try {
    const request = await fetch(`${baseUrl}users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    const response = await request.json();


    return response;

  } catch (error) {
    console.log(error);
  }
}
async function getPosts() {
  const localStorage = getLocalStorage();
  try {
    const request = await fetch(baseUrl + "posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function createPost(body){
  const localStorage = getLocalStorage()
  try {
    const request = await fetch(`${baseUrl}posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(body)
    })
    const response = await request.json()

    console.log(request);
  }catch(error){

  }
}
createPost()


export { login, register, getPosts, getProfiles };
