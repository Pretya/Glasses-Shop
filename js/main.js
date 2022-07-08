const tabHeader = document.querySelectorAll ('[data-tab]');
const tabContent = document.querySelectorAll ('[data-tab-content]');

// Tabs===1
 tabHeader.forEach(function(item){
    item.addEventListener('click', function(){
        tabHeader.forEach(function(e){
            e.classList.remove('tabs__hidden__underline');

        })
          item.classList.add('tabs__hidden__underline');

       
        tabContent.forEach(function(item){
            item.classList.add('tabs__hidden');
        });

        const tabContentBox = document.querySelector('#' + this.dataset.tab);
        tabContentBox.classList.remove('tabs__hidden');
    });
 });

 const tabsHeader = document.querySelectorAll ('[data-tabs]');
 const tabsContent = document.querySelectorAll ('[data-tabs-content]');

// /.Tabs1

// Tabs2
 tabsHeader.forEach(function(item){
    item.addEventListener('click', function(){
        tabsHeader.forEach(function(e){
            e.classList.remove('tabs__hidden__underline');
        })

          item.classList.add('tabs__hidden__underline');
       
        tabsContent.forEach(function(item){
            item.classList.add('tabs__hidden');
        });

        const tabsContentBox = document.querySelector('#' + this.dataset.tabs);
        tabsContentBox.classList.remove('tabs__hidden');
    });
 });
// /.Tabs2

// Slaider

const slaiderHeader = document.querySelectorAll ('[data-slaider]');
const slaiderContent = document.querySelectorAll ('[data-slaider-content]');

slaiderHeader.forEach(function(item){
    item.addEventListener('click', function(e){
        slaiderHeader.forEach(function(item){
            item.classList.remove('btn__hidden');
        })
              item.classList.add('btn__hidden');

        slaiderContent.forEach(function(item){
            item.classList.add('img__hidden');
        });

        const slaiderContentBox = document.querySelector('#' + this.dataset.slaider);
        slaiderContentBox.classList.remove('img__hidden');

    })
});

const linkModal = document.querySelector('[data-modal-link]');
const linkModalFooter = document.querySelector('[data-modal-link-footer]');
const linkModalDoctor = document.querySelector('[data-modal-link-doctor]');

const modalWindow = document.querySelector('[data-modal]');
const modalWindowFooter = document.querySelector('[data-modal-footer]');
const modalWindowDoctor = document.querySelector('[data-modal-doctor]');

const bodyOver = document.querySelector('body');


// !==========Modal1
    linkModal.addEventListener('click', function(e){
        
       

        bodyOver.classList.add('overflow');
    
        modalWindow.classList.remove('modal__hidden');
    
        modalWindow.addEventListener('click', function(){
            modalWindow.classList.add('modal__hidden');
            bodyOver.classList.remove('overflow');
        });
      });

    

    // !==========Modal2

      linkModalFooter.addEventListener('click', function(e){
        
       

        bodyOver.classList.add('overflow');
    
        modalWindowFooter.classList.remove('modal__hidden');
    
        modalWindowFooter.addEventListener('click', function(){
            modalWindowFooter.classList.add('modal__hidden');
            bodyOver.classList.remove('overflow');
        });
      });


    // !========Modal3

    linkModalDoctor.addEventListener('click', function(){
        console.log('Click!!!')

        bodyOver.classList.add('overflow');
        modalWindowDoctor.classList.remove('modal__hidden');

        modalWindowDoctor.addEventListener('click', function(){
            modalWindowDoctor.classList.add('modal__hidden');
            bodyOver.classList.remove('overflow');
        });
    });


    modalWindowDoctor.querySelector('.modal__wrapper').addEventListener('click', function(event){
        event.stopPropagation();    
     });
    

    modalWindow.querySelector('.modal__wrapper').addEventListener('click', function(event){
        event.stopPropagation();    
     });
    modalWindowFooter.querySelector('.modal__wrapper').addEventListener('click', function(event){
        event.stopPropagation();    
     });


    //  
     const linkPhoneModal = document.querySelector('[data-modal-phone]');
     const modalPhoneWindow = document.querySelector('[data-phone]')
     
     linkPhoneModal.addEventListener('click',function(){
        bodyOver.classList.add('overflow');
        modalPhoneWindow.classList.remove('modal__hidden');

        modalPhoneWindow.addEventListener('click', function(){
            modalPhoneWindow.classList.add('modal__hidden');
            bodyOver.classList.remove('overflow');
        })
     });

     modalPhoneWindow.querySelector('.callback__window').addEventListener('click',function(event){
        event.stopPropagation();
     });
   
    // !Modal 4 burger
    const linkModalBurger = document.querySelector('[data-modal-burger]');
    
    const windowModalBurger = document.querySelector('[data-phone-burger]');
    const linkCabinetBurger = document.querySelector('[data-modal-cabinet-burger]');
    console.log(linkCabinetBurger);

    linkModalBurger.addEventListener('click', function(){
        windowModalBurger.classList.toggle('modal__hidden');
        bodyOver.classList.toggle('overflow');

        linkCabinetBurger.addEventListener('click', function(){
            console.log('Click!!!');
            windowModalBurger.classList.add('modal__hidden');
            modalWindow.classList.remove('modal__hidden');
            bodyOver.classList.add('overflow');

            modalWindow.addEventListener('click', function(){
                modalWindow.classList.add('modal__hidden');
                windowModalBurger.classList.remove('modal__hidden');
                bodyOver.classList.toggle('overflow');
            })
        })

    });


    // ! Slider
     $(document).ready(function(){
        $('.slider').slick({
            arrows:false,
            dots:true,
            adaptiveHeight: true,
            initialSlide: 0,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 3500,
            variableWidth: true,
             
        });
    });

    // Burger-menu

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };
    
    if (isMobile.any()) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    }


    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.nav__list');
  


if (iconMenu) {
    
    iconMenu.addEventListener('click', function() {
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
     })
} 
