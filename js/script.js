//this function is written to change the background color when scrolling
window.onscroll = function() {myFunction()};
function myFunction() {
    
    if (document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450) {
      document.getElementById("myDiv").className = "test";
    } else {
      document.getElementById("myDiv").className = "test1";
    }    
    if(document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600){
        document.getElementById("myDiv").className = "test2";
    }
    if(document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900){
        document.getElementById("myDiv").className = "test3";
    }
  }
  //I added debaunc for speed limiting
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
  
    return function () {
      const context = this;
      const args = arguments;
  
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      const callNow = immediate && !timeout;
  
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
  };

const sliderpictures = document.querySelectorAll('.picture');

function checkSlide(e){
    //console.count(e);
   // console.log(window.scrollY);
    sliderpictures.forEach(sliderImage => {
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      if(isHalfShown && isNotScrolledPast){
        sliderImage.classList.add('active');
      } else {
          sliderImage.classList.remove('active');
      }
      //console.log(slideInAt);
    })
  
}
window.addEventListener('scroll', debounce(checkSlide))




  