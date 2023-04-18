let links = document.querySelectorAll(".close");


links.forEach(function(link){

    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        
        content.classList.remove("fadeOuUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href = "/";
        },1000);
        
        
        
        
    })
})
