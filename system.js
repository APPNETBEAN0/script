
window.onload = ()=>{
    if(localStorage.getItem("bgn") != null){
        newto.style.display="none";
    }
    mainpost();
    postforyou();
    let body =document.querySelector("body");
    body.style.height =window.innerHeight;
}
 function arrow(){
     x +=1;
     let menu =document.getElementById('menu');
     let nav =document.querySelector("nav");
     menu.classList.add("closemenu");
     nav.style.right=0;
      let item =index.map(function(id){
          return "<div class='links'>"+"<span>&rightarrow;</span>"+id.i+"</div>";
      });
      goto.innerHTML =item.join(" ");
      for (var i = 0; i <links.length; i++) {
     links[0].onclick =function(){
         arrow();
         pages.style.left="0%";
         setTimeout(function() {
             followpages();
             postforyou();
         }, 1000);
     }
     links[1].onclick = function(){
         arrow();
         open("bookforyou.html");
     }
     links[2].onclick =function(){
         arrow();
         open("feature.html");
     }
     links[3].onclick =function(){
         arrow();
        open("privacy.html");
     }
     links[4].onclick = function(){
         open("report.html");
         arrow();
     }
     links[5].onclick = function(){
         open("about.html");
         arrow();
     }
}
     if(x==2){
         menu.classList.remove("closemenu");
         nav.style.right=-330;
         return x=0;
     }
 }
 backhome.onclick = function(){
    location.replace("home.html");
 }
  function hit(){
      localStorage.setItem("bgn","qwe");
      newto.style.display='none';
       pages.style.left="0%";
         setTimeout(function() {
             followpages();
             postforyou();
         }, 1000);
  }