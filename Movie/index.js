
let intro=document.querySelector('.intro');
let logo=document.querySelector('.logo_header');
let lospan=document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        lospan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*400)
        });
setTimeout(()=>{
    lospan.forEach((span,idx)=>{
        setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
        },(idx+1*50))
    })
},2000);
setTimeout(()=>{
    intro.style.top='-100vh';
},2500)
    })
});

let swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
  grabCursor:true,
  spaceBetween:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });


document.querySelectorAll('.movie').forEach(movie => {
    movie.addEventListener('click', () => {
        const movieUrl = movie.getAttribute('data-video');
        if (movieUrl) {
            window.open(movieUrl, '_blank');
        } else {
            alert('Movie URL not available');
        }
    });
});

