const yo = document.querySelector(".yo"); 

yo.addEventListener("click", ()=>{
    if(yo.classList.contains("hablar")){
        yo.classList.remove("hablar");
    }else{
        yo.classList.add("hablar")
    }
})
