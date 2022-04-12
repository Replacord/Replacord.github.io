//functions
function createFile(name, text, type) {
  
    type = type || "plain/text"
  
    var a = document.createElement("a")
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name+type;
    document.body.append(a)
    a.click()
    a.remove()
  }



// Create
if (location.pathname == "/studio/c"){
document.getElementById("gpt").addEventListener("click", ()=>{

let currentProjectType = document.getElementById("Ptype").value
let currentProjectName= document.getElementById("Pname").value

if (currentProjectType == 'null' && currentProjectName != '') {
    alert("No Project Type")
} else if (currentProjectType == 'null' && currentProjectName == ''){
    alert("No Project Type & Name")
} else if (currentProjectType != 'null' && currentProjectName == ''){
    if (currentProjectType == 'CreateTheme') {
        window.location.href = "./c/themes"
    } else{
        alert("No Project Name")
    }

} else if (currentProjectType != 'null' && currentProjectName != ''){

if (currentProjectType == "CreateTheme-RpTheme"){
    window.location.href="./c/thememkr?pname="+currentProjectName
}

}

})

document.getElementById("Ptype").addEventListener("change", ()=>{

let currentProjectType = document.getElementById("Ptype").value
let currentProjectName= document.getElementById("Pname")
let cBTN= document.getElementById("gpt")
let currentProjectNameHeader= document.getElementById("PnameH")

if (currentProjectType == 'CreateTheme') {
    currentProjectName.style.visibility = "hidden"
    currentProjectNameHeader.style.visibility = "hidden"
    cBTN.innerText = "Open Theme Maker"
    
}else{
    currentProjectName.style.visibility = "visible"
    currentProjectNameHeader.style.visibility = "visible"
    cBTN.innerText = "Create"
}

})
}

// Theme Maker
if (location.pathname == "/studio/c/thememkr"){


    document.getElementById("UseTheme").addEventListener("click", ()=>{

        let nc = document.getElementById("themeCode").value

        let ncK = nc.replaceAll("&Link Color&Hover", "a:hover").replaceAll("&Button Color&Hover", " .M-BTN:hover, .navbtns button:hover").replaceAll("&Link Color&", "a").replaceAll("&Text Color&", "*, .navtitle").replaceAll("&NavBar Color&", ".navbar").replaceAll("&Background Color&", "body").replaceAll("&Button Color&", ".M-BTN, .navbtns button")

        let fin = `
        
        @import "/static/css/main.scss";
        
        `+ncK.replaceAll("@Border", "border-style:groove; border-width: 3px;").replaceAll("%color", "color:").replaceAll("%under-line-color", "text-decoration-color:").replaceAll("#color", "background-color:").replaceAll("#ring-color", "border-color:").replaceAll("%", ";").replaceAll("-@!", "{").replaceAll("!@", "}")

        localStorage.setItem("theme", "custom")
        localStorage.setItem("Ctheme", fin)
        location.reload()

    })

    document.getElementById("DownloadTheme").addEventListener('click', ()=>{

        let nc = document.getElementById("themeCode").value

        let nn = document.getElementById("pname").value

        createFile(nn, nc, ".rptheme")


        
    })


}