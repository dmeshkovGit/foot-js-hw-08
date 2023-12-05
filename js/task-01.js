const categories = document.querySelector("#categories")
const getAmountOfCategories = (element) => {
  return `Number of categories: ${element.children.length}` 
}
console.log(getAmountOfCategories(categories));

const categoriesItems = document.querySelectorAll(".item")

categoriesItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
