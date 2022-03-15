export function loadMenu(){
    let pagecontent = document.getElementById("content")
    let header = document.createElement("div")
    header.classList.add("header")
    let headercontent = document.createElement("h1")
    headercontent.textContent = "Menu"
    header.appendChild(headercontent)



    let body = document.createElement("div")
    body.classList.add("body")
    let bodyh2 = document.createElement("h2")
    bodyh2.textContent = "This is our pizza menu:"


    let bodylist = document.createElement("ul")

    let bodyli1 = document.createElement("li")
    bodyli1.textContent = "Margherita"
    let bodyli2 = document.createElement("li")
    bodyli2.textContent = "Capricciosa"
    let bodyli3 = document.createElement("li")
    bodyli3.textContent = "Funghi"
    let bodyli4 = document.createElement("li")
    bodyli4.textContent = "4 Formaggi"


    bodylist.append(bodyli1, bodyli2, bodyli3, bodyli4)

    
    body.append(bodyh2, bodylist)



let menutab = document.createElement("div")
menutab.classList.add("menutab")
    menutab.append(header, body)

pagecontent.append(menutab)
}