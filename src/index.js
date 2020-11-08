import tpl from './templates/template.hbs'
import menuCards from './menu.json'


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const menuList = document.querySelector('.js-menu')
const checkbox = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')

checkbox.addEventListener('change', onChangeTheme)
checkbox.addEventListener('change', saveThemeInLS)
window.addEventListener('load', getThemeFromLS)

const cardsMarkup = createMenuCradsMarkup(menuCards)
menuList.insertAdjacentHTML('beforeend', cardsMarkup)

function createMenuCradsMarkup(menuCards) {
    return tpl(menuCards)
}

// body.classList.add(Theme.LIGTH)
function onChangeTheme(e) {
    
    if (checkbox.checked) {
        body.classList.add(Theme.DARK)
    }
        else {
        body.classList.remove(Theme.DARK)
    }
}

function saveThemeInLS(e) {
  if (checkbox.checked) {
    localStorage.setItem('theme', Theme.DARK)
  } else {
    localStorage.removeItem('theme', Theme.DARK)
  }
}


function getThemeFromLS(e) {
  if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK)
    checkbox.checked = true
  }
}


// import menuCardTpl from "./templates/menu-item.hbs";
// import cards from './menu.json';



// // theme switched

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// const body = document.querySelector('body');
// const themeSwitcher = document.querySelector(".theme-switch__toggle");



// themeSwitcher.addEventListener('change', clickHandler);
// themeSwitcher.addEventListener('change', setLocalStorage);
// // document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);
// window.addEventListener("load", getThemeFromLocalStorage)

// body.classList.add("light-theme")
// function clickHandler(e) {

//   if (themeSwitcher.checked) {
//    body.classList.add(Theme.DARK);
   
//   } else {

//       body.classList.remove(Theme.DARK);
      
//   }
// }

// function setLocalStorage(e) {
//   if (themeSwitcher.checked) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.removeItem('theme');
//     // localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

// function getThemeFromLocalStorage(e) {
// //   const themeInLocalStrg = localStorage.getItem('theme');
//   if (localStorage.getItem('theme') === Theme.DARK) {
//     body.classList.add(Theme.DARK);
//     themeSwitcher.checked = true;
//   }
// }

// // function setDarkTheme() {
// //   body.classList.add(Theme.DARK);
// //   body.classList.remove(Theme.LIGHT);
// // }

// // function setLightTheme() {
// //   body.classList.add(Theme.LIGHT);
// //   body.classList.remove(Theme.DARK);
// // }


// // themeSwitcher.checked = false;
// // function clickHandler() {
// //   if (this.checked) {
// //     body.classList.remove(Theme.LIGHT);
// //     body.classList.add(Theme.DARK)
// //     localStorage.setItem("theme", "dark-theme")
// //   }

// //   else {
// //     body.classList.remove(Theme.DARK);
// //     body.classList.add(Theme.LIGHT)
// //     localStorage.setItem("theme", "light-theme")
// //   }
// //  };


// //  menu-cards


// const menuContainer = document.querySelector(".js-menu");
// const cardsMarkup = createColorCardsMarkup(cards);
// menuContainer.insertAdjacentHTML("beforeend", cardsMarkup);


// function createColorCardsMarkup(cards) {
//     return menuCardTpl(cards);
// }

// // console.log(menuCardTpl);
// // console.log(cards);