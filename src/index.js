import { loadContact } from "./loadcontacts";
import { loadHome } from "./loadhome";
import { loadMenu } from "./loadmenu";
import css from "./style.css";

let pagecontent = document.getElementById("content")
let homebtn = document.querySelector(".homebtn")
let menubtn = document.querySelector(".menubtn")
let contactsbtn = document.querySelector(".contactsbtn")

loadHome()
loadMenu()
loadContact()


console.log(pagecontent.firstElementChild)
console.log(pagecontent.childNodes[2])
console.log(pagecontent.lastElementChild)

pagecontent.firstElementChild.className = "hometab displaytab"

pagecontent.childNodes[2].className = "menutab hidetab"
pagecontent.lastElementChild.className = "contentstab hidetab"




menubtn.addEventListener("click", ()=>{
    pagecontent.childNodes[2].className = "menutab displaytab"
    pagecontent.firstElementChild.className = "hometab hidetab"
    pagecontent.lastElementChild.className = "contentstab hidetab"
})

contactsbtn.addEventListener("click", ()=>{
    pagecontent.lastElementChild.className = "contentstab displaytab"
    pagecontent.firstElementChild.className = "hometab hidetab"
    pagecontent.childNodes[2].className = "menutab hidetab"
})

homebtn.addEventListener("click", ()=>{
    pagecontent.firstElementChild.className = "hometab displaytab"
    pagecontent.childNodes[2].className = "menutab hidetab"
pagecontent.lastElementChild.className = "contentstab hidetab"
})