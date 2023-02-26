// Напиши скрипт который:

const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

for (let i = 0; i < itemsEl.length; i++) {
  console.log(`Category: ${itemsEl[i].firstElementChild.textContent}`);
  console.log(`Elements: ${itemsEl[i].lastElementChild.children.length}`);
}
