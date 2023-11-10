const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const markupItem = arr =>
  arr.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    itemRef.classList.add('item');

    return itemRef;
  });

ingredientsRef.append(...markupItem(ingredients));
