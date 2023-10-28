const categoriesRef = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
