const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.navigationBar');
const navItems = document.querySelectorAll('.navItem');

let showMenu = false;
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  } else {
    hamburger.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}

$('nav')
  .find('.pageLink')
  .click(function(e) {
    hamburger.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
    let section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    });
  });
