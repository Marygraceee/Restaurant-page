


export function loadHome(){
    let pagecontent = document.getElementById("content")
    let header = document.createElement("div")
    header.classList.add("header")
    let headercontent = document.createElement("h1")
    headercontent.textContent = "Welcome to Ciccilandia"
    header.appendChild(headercontent)



    let body = document.createElement("div")
    body.classList.add("body")
    let bodycontent = document.createElement("p")
    bodycontent.textContent = "We are the best restaurant in town!"
    body.appendChild(bodycontent)

    let hometab = document.createElement("div")
    hometab.classList.add("hometab")
    hometab.append(header, body)
pagecontent.append(hometab)
}