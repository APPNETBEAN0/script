function postforyou() {
    let DailyPost = document.getElementById("DailyPost");
    let postid1 = document.getElementsByClassName("postctn");
    let stg = localStorage.getItem("stg1");

    if (stg != null) {
        DailyPost.style.display = "none";
        postid1.style.display = "block";
    } else {
        for (var i = 0; i <postid1.length; i++) {
            postid1[i].style.display="none";
        }
    }
}