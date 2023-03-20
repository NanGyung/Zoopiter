const $hamburger = document.getElementById('hamburger');

const join = document.getElementById('join');
$hamburger.addEventListener('click', e => {
  const $nav = document.querySelector('.hd');
  const $menu = document.querySelector('.hd .hd__menu');
  const $menuList1 = document.querySelector('.hd__menu .hd__menu__list1');
  const $menuItem1 = document.querySelectorAll(
    '.hd__menu__list1 .hd__menu__list1__item',
  );

  $nav.classList.toggle('active');
  $menu.classList.toggle('active');
  $menuList1.classList.toggle('active');
  $menuItem1[0].classList.toggle('active');
  $menuItem1[1].classList.toggle('active');
  $menuItem1[2].classList.toggle('active');

  if (join.style.display === 'flex') {
    join.style.display = 'none';
  } else {
    join.style.display = 'flex';
  }

  const $item1 = document.querySelectorAll(
    '.hd__menu__list1__item.active ',
  );

  for (const ele of $item1) {
    ele.addEventListener('click', e => {
      const target = e.target.parentElement;
      const $menuList2 = target.querySelector(
        '.hd__menu__list1__item__submenu',
      );

      if ($menuList2.style.display === 'none') {
        $menuList2.style.display = 'block';
      } else {
        $menuList2.style.display = 'none';
      }
    }, true);
  }
});