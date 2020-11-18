window.onload = function(){
    let links = document.getElementsByTagName("a");
    for(i=0;i<links.length;i++){
        links[i].addEventListener("click",click);
    }
}

function click () {
    let nav = parseInt(event.target.id);
    let sections = document.getElementsByTagName("section");
    let navs = document.getElementsByTagName("a");
    for(i=0;i<navs.length;i++){
        if(i==nav){
            navs[i].classList.add("clicked");
        }else{
            navs[i].classList.remove("clicked");
        }
    }
    if(nav == 0){
        for(i=0;i<sections.length;i++){
            console.log(i)
            sections[i].classList.remove("show");
            sections[i].classList.remove("hide");
        }
    }else{
        nav = nav-1;
        for(i=0;i<sections.length;i++){
            if(i!=nav){
                sections[i].classList.add("hide");
                sections[i].classList.remove("show");
            }else{
                sections[i].classList.remove("hide");
                sections[i].classList.add("show");
            }
        }
    }

}