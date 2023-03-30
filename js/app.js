$('.header__top-btn--inner').on('click', function(){
    $('.header__right-menu--inner').addClass('show')
  });
  $('.close').on('click', function(){
    $('.header__right-menu--inner').removeClass('show')
  });
  $('.header__top-btn--inner').on('click', function(){
    $('body').addClass('open')
  });
  $('.close').on('click', function(){
    $('body').removeClass('open')
  });

  $('.plus1').on('click', function(){
    $('.plus1').addClass('hide')
  });
  $('.plus1').on('click', function(){
    $('.minus1').addClass('active')
  });
  $('.minus1').on('click', function(){
    $('.minus1').removeClass('active')
  });
  $('.minus1').on('click', function(){
    $('.plus1').removeClass('hide')
  });
  $('.plus1').on('click', function(){
    $('.header__bottom-responsive--sublist1').addClass('activ-sub')
  });
  $('.minus1').on('click', function(){
    $('.header__bottom-responsive--sublist1').removeClass('activ-sub')
  });


  $('.plus2').on('click', function(){
    $('.plus2').addClass('hide')
  });
  $('.plus2').on('click', function(){
    $('.minus2').addClass('active')
  });
  $('.minus2').on('click', function(){
    $('.minus2').removeClass('active')
  });
  $('.minus2').on('click', function(){
    $('.plus2').removeClass('hide')
  });
  $('.plus2').on('click', function(){
    $('.header__bottom-responsive--sublist2').addClass('activ-sub')
  });
  $('.minus2').on('click', function(){
    $('.header__bottom-responsive--sublist2').removeClass('activ-sub')
  });

  $('.plus3').on('click', function(){
    $('.plus3').addClass('hide')
  });
  $('.plus3').on('click', function(){
    $('.minus3').addClass('active')
  });
  $('.minus3').on('click', function(){
    $('.minus3').removeClass('active')
  });
  $('.minus3').on('click', function(){
    $('.plus3').removeClass('hide')
  });
  $('.plus3').on('click', function(){
    $('.header__bottom-responsive--sublist3').addClass('activ-sub')
  });
  $('.minus3').on('click', function(){
    $('.header__bottom-responsive--sublist3').removeClass('activ-sub')
  });

  $('.header__bottom-btn--inner').on('click', function(){
    $('.header__bottom-responsive').toggleClass('activ-sub')
  });


  $('.header__bottom-search').on('click', function(){
    $('.header__bottom-search--wrapper').addClass('activ-sub')
  });
  $('.header__bottom-search').on('click', function(){
    $('.header__bottom').addClass('hide')
  });

  $('.header__search-close').on('click', function(){
    $('.header__bottom-search--wrapper').removeClass('activ-sub')
  });
  $('.header__search-close').on('click', function(){
    $('.header__bottom').removeClass('hide')
  });


  const btnUp = {
    el: document.querySelector('.footer__btn'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.footer__btn').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();


let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
            navItems = document.querySelectorAll(`[data-id-nav=${pageId}]`);
            navItems.forEach((navItem) => {
                if(pageId == navItem.getAttribute("data-id-nav")) {
                    navItem.classList.add("active-menu");
                }
            })

const headerBottomItem = document.querySelectorAll('.header__bottom-item')
const headerBottomSubmenu = document.querySelector('.header__bottom-submenu')
const headerBottomSubmenuItem = document.querySelectorAll('.header__bottom-submenu--item')

headerBottomSubmenuItem.forEach((submenuItem) => {
  if(submenuItem.lastElementChild.classList.contains('active-menu')) {
    submenuItem.classList.add('act')
    let activMenu =  submenuItem.closest('.header__bottom-submenu')
    activMenu.classList.add('act')
    headerBottomItem.forEach((topItem) => {
      if(topItem.lastElementChild.classList.contains('act')) {
        topItem.classList.add('active-menu')
      }
    })
  }
})






