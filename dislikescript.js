
function dislike(d) {
       switch (d) {
           case 1:
               localStorage.removeItem("stg1");
               location.reload();
               break;
       }
   }