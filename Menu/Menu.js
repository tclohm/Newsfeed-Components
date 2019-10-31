/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(props) {
  
  const createElement = (element) => { return document.createElement(element); }
  const menu = createElement("div");
  const menuUList = createElement("ul");
  const menuListItem = props.map( () => { return createElement("li"); } );

  menuListItem.map( (element, index) => {
    element.textContent = props[index];
    menuUList.appendChild(element);
  });

  menu.classList.add("menu");
  menu.appendChild(menuUList);
  
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    if (!menu.classList.contains("menu--open")) {
      TweenMax.from(".menu", 0.5, {opacity: 0, scale: 0, ease: Back.easeOut, });
      menu.classList.add("menu--open")
    } else {
      TweenMax.to(".menu", 0.5, {x: 0, ease: Bounce.easeOut,});
      menu.classList.remove("menu--open")
    }
  });

  return menu;
}

const header = document.querySelector(".header");
const menu = createMenu(menuItems);
header.appendChild(menu);


