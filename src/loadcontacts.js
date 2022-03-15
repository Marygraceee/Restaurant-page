export function loadContact(){
    let pagecontent = document.getElementById("content")


    let body = document.createElement("div")
    body.classList.add("body")
    let bodyemail = document.createElement("p")
    bodyemail.textContent = "Email: ciccilandia@love.com"
    let bodynumber = document.createElement("p")
    bodynumber.textContent = "Phone number: 07738135"
    body.append(bodyemail, bodynumber)

    let contactstab = document.createElement("div")
    contactstab.classList.add("contactstab")
    contactstab.append(body)
pagecontent.append(contactstab)
}