const dark = document.querySelector("#dark");
const html = document.querySelector("html");
const section = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

//ketika di klik darkmode
dark.addEventListener("click", function(){
    if(html.dataset.colorMode === "light"){
        html.dataset.colorMode = "dark";
        this.textContent = "Light Mode";
    }else{
        html.dataset.colorMode = "light";
        this.textContent = "Dark Mode";
    }
});

//navbar active
window.addEventListener('scroll', ()=> {
    let current = '';
    section.forEach( section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute('id');
        }
    });
    
    navLi.forEach( li =>{
        li.classList.remove('active');
        if (li.classList.contains(current)){
            li.classList.add('active')
        }
    });
});
