import { createPost, deletePost, updatePost } from "../scripts/requests.js";
import { renderAvatarandPosts } from "../pages/home/index.js";
import { openModalTwo } from "../pages/modal/modaltest.js";

const eventForm = async () => {
  const form = document.querySelector(".modal");
  const modal = document.querySelector(".modal_wrapper ");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const inputs = [...event.target];

    const newPost = {};
    inputs.forEach(({ name, value }) => {
      if (name) {
        newPost[name] = value;
      }
    });

    await createPost(newPost);
    await renderAvatarandPosts();
  });

  return form;
};

const updatePostForm = ({ title, content, id }) => {
  const form = document.createElement("form");
  form.classList.add("modal_two");

  form.insertAdjacentHTML(
    "beforeend",
    `
  <h3>Edição</h3>
  <div class="title_input_two">
  <label for="title">Titulo</label>
  <input placeholder="Digitar Titulo" name="title" value="${title}" required>
  </div>

  <div class="content_input_two">
  <label for="description">Descrição</label>
  <input  name="content" value="${content}" />
  </div>
 
  <div class="btns_inputs_two">
      <button>Excluir</button>
      <button type="submit">Salvar alterações</button>
  </div>
  `
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const inputs = [...event.target];

    const post = {};

    inputs.forEach(({ name, value }) => {
      if (name) {
        post[name] = value;
      }
    });

    await updatePost(post, id);
    await renderAvatarandPosts();
  });

  return form;
};
const openModalDeletePost = (id) => {
  const deleteForm = deletePostForm(id);
  openModalTwo(deleteForm);
};

const deletePostForm = (id) => {
  const form = document.createElement("form");
  form.classList.add("form_delete");

  form.insertAdjacentHTML(
    "beforeend",
    `
  <h3>Confirmação de exclusão</h3>

  <h4> Tem certeza que deseja excluir este post? </h4>
  <p> Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir </p>

  
    <button> Cancelar </button>
    <button type="submit"> Sim, excluir este post </button>
  

 `
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await deletePost(id);
    await renderAvatarandPosts();
  });

  return form;
};

export { eventForm, updatePostForm, deletePostForm, openModalDeletePost };
