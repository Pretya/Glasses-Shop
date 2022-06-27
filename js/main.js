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
const modalWindow = document.querySelector('[data-modal]');
const bodyOver = document.querySelector('body');




linkModal.addEventListener('click', function(){

    bodyOver.classList.add('overflow');

    modalWindow.classList.remove('modal__hidden');

  

    modalWindow.addEventListener('click', function(){
        modalWindow.classList.add('modal__hidden');
        bodyOver.classList.remove('overflow');
    })

} )

modalWindow.querySelector('.modal__wrapper').addEventListener('click', function(event){    
        event.stopPropagation();
     })
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
    })
