function activateHeader() {
    const header = document.querySelector(".header");
  
    window.onscroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("header_active");
      } else {
        header.classList.remove("header_active");
      }
    };
  }
  
  activateHeader();

  function activateBurgerMenu(){
    const burgerItem=document.querySelector(".burger");
    const menu=document.querySelector("header_nav");
    const menuClose=document.querySelector("header_nav-close");

    burgerItem.addEventListener("click",()=> {
      menubar.classList.add("header_nav-active");

    });
  }

  activateBurgerMenu()
  function mySmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
  
        if (scrollTarget) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const topOffset = headerHeight + 20;
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }
  
  mySmoothScroll();
  

