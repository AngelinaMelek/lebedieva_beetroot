const CATEGORY_BREAKFAST = 0;
const CATEGORY_LUNCH = 1;

const food = [
  {
    name: "Овсяная каша с фруктами",
    img: "i/im1.jpg",
    price: 25,
    category: CATEGORY_BREAKFAST,
  },
  {
    name: "Яичница глазунья с овощами на сковородке",
    img: "i/im2.jpg",
    price: 25,
    category: CATEGORY_BREAKFAST,
  },
  {
    name: "Сет азербайджанский завтрак",
    img: "i/im3.jpg",
    price: 30,
    category: CATEGORY_BREAKFAST,
  },
  {
    name: "Шпинатный крем-суп",
    img: "i/im6.jpg",
    price: 50,
    category: CATEGORY_LUNCH,
  },
];

function getItemHTML(item) {
  const container = document.createElement("div");
  const title = document.createElement("h3");
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  const body = document.createElement("div");
  const p = document.createElement("p");
  const qty = document.createElement("div");
  const button = document.createElement("button");
  const input = document.createElement("input");
  const span = document.createElement("span");

  container.appendChild(title);
  container.appendChild(imgDiv);
  container.appendChild(body);
  imgDiv.appendChild(img);
  body.appendChild(p);
  body.appendChild(qty);
  body.appendChild(button);
  qty.appendChild(input);
  qty.appendChild(span);

  span.textContent = " грн";
  input.value = 1;
  img.src = item.img;
  title.textContent = item.name;
  container.classList.add("product-box__item");
  title.classList.add("product-box__title");
  imgDiv.classList.add("product-box__img");
  img.classList.add("img-fluid");
  body.classList.add("product-box__meta");
  input.classList.add("qty__item");
  button.classList.add("product-box__btn");
  button.textContent = "Добавить";

  return container;
}

function renderFood() {
  const container = document.getElementById("foods");
  container.innerHTML = "";
  // TODO: sort food by category, price
  for (const item of food) {
    const element = getItemHTML(item);
    container.appendChild(element);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderFood();
});
