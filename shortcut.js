var x = 0;
var menu = document.querySelector("#menu");
var body = document.body;
var goto = document.getElementById("navview");
var links = goto.getElementsByClassName("links");
var pages = document.getElementById("pages");
var id1 = document.getElementById("id");
var post = document.getElementsByClassName("PageBody");
var main = document.getElementById("mainpost");
var offlineTheme =document.getElementsByTagName("img");
var backhome =document.querySelector("#backhome");
var lens =document.querySelector(".lens");
var find =document.getElementById("find");
var newto =document.getElementById("newto");
var index = [{
    i: "Follow & Pages"
    },
     {
        i: "Book For You"
    },
    {
        i:"New Feature"
    },
    {
        i: "Term and Policy",
    },
    {
        i: "Report Error"
    },
    {
        i: "About us"
    }];
    function backarrow() {
    location.reload();
}
function lenslink(){
    open("lens.html");
}