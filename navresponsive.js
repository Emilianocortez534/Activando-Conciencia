(() => {


    const  openNav= document.querySelector(".open__menu");
   const closeNav = document.querySelector(".close__boton");
    const navMenu= document.querySelector(".nav__menu");
    const overlay = document.querySelector(".overlay")
    const mediaSize = 860;


    openNav.addEventListener("click", toggleNav);
    closeNav.addEventListener("click", toggleNav);
    overlay.addEventListener("click", toggleNav)

    function toggleNav() {
        navMenu.classList.toggle("open")
        overlay.classList.toggle("active")
        document.body.classList.toggle("hidden-scrolling")
    }

    navMenu.addEventListener("click", (hola) =>{
        if(hola.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize){
            const menuItemHasChildren = hola.target.parentElement;
            if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu()
            }
        menuItemHasChildren.classList.add("active");
        const subMenu= menuItemHasChildren.querySelector(".sub__menu")
        subMenu.style.maxHeight  = subMenu.scrollHeight +"px"
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub__menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
    

})();
