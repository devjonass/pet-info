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

      localStorage.setItem("user", JSON.stringify(response.token));

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
  const localStoragge = getLocalStorage();
  try {
    const request = await fetch(`${baseUrl}users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStoragge}`,
      },
    });

    const response = await request.json();
    localStorage.setItem("user:USERS", JSON.stringify(response));

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
        Authorization: `Bearer ${localStorage}`,
      },
    });

    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function createPost(body) {
  const localStorage = getLocalStorage();
  try {
    const request = await fetch(`${baseUrl}posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage}`,
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function updatePost(body, idPost) {
  const localStorage = getLocalStorage();
  try {
    const request = await fetch(`${baseUrl}posts/${idPost}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage}`,
      },
      body: JSON.stringify(body),
    });
    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function deletePost(idPost) {
  const localStorage = getLocalStorage();
  try {
    const request = await fetch(`${baseUrl}posts/${idPost}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage}`,
      },
    });
    const response = await request.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}

export {
  login,
  register,
  getPosts,
  getProfiles,
  createPost,
  updatePost,
  deletePost,
};
