// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
{
  /* <p><a href="index.html">Go back</a></p>

<ul id="ingredients"></ul> */
}

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = element;
  ulEl.append(ingredientsEl);
});
