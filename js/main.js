'use strict';
{
// ハンバーガーメニューのイベント実装

// ハンバーガーメニューの要素
const hamburgerMenu = document.querySelector('.hamburger-menu');

// ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
const navi = document.getElementById('nav');
const mask = document.getElementById('mask');


// ハンバーガーメニュー内の各セクションの要素
const hambergerMenuSections = document.querySelectorAll('menu-section');


//ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  navi.classList.toggle('active');
  mask.classList.toggle('active');
});

// ハンバーガーメニューの各セッションをクリックした際、開いていたハンバーガーメニューを閉じる
//ambergerMenuSections.forEach((hambergerMenuSection) => {
//  hambergerMenuSection.addEventListener('click', function() {
 //   hamburgerMenu.classList.remove('active');
//    navi.classList.remove('active');
//  });
//});


}
