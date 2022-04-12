import { $ } from "/js/mods/html.mjs"







function download(name, ftype, type, text) {

  ftype = ftype || ".txt"
  
  var a = document.createElement("a")
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name+ftype;
  document.body.append(a)
  a.click()
  a.remove()
}










let theme = $.get('theme')

let lnk = document.createElement('link')
$.att(lnk, 'rel', 'stylesheet')

if (theme == null){

    $.set('theme', 'main.scss')
    $.att(lnk, 'href', `static/css/${theme}`)
    document.body.append(lnk)
    location.reload()
}

if (theme !== '' || theme !== null || theme !== undefined || theme !== 'custom'){

    $.att(lnk, 'href', `/static/css/${theme}`)
    document.body.append(lnk)
}

if(theme == 'custom'){

  let Cstyle = document.createElement('style')
  Cstyle.innerHTML = $.get('Ctheme')
  document.body.append(Cstyle)

}

if (location.pathname != '/studio/c' || location.pathname != '/studio/c/thememkr'){
function gtn(){

  let tn = document.getElementById("themename").value || "theme"
  return tn

}


document.getElementById("NewTheme").onclick = ()=>{

if (document.getElementById('NT') != null || document.getElementById('NT') != undefined){

  document.getElementById('NT').remove()
  
}

let NT = document.createElement("div")

NT.setAttribute("style", " margin-left: 1%; float: left; width: 75%; height: 270%; color: black; background-color: darkgray;")
NT.setAttribute("id", "NT")

document.body.append(NT)



let themename = document.createElement("span")
themename.setAttribute("class", "L")
themename.setAttribute("style", "display: block;")
themename.innerText = "Theme Name"

let themename2 = document.createElement("input")
themename2.setAttribute("style", "display: block;")
themename2.setAttribute("class", "M-INP")
themename2.setAttribute("id", "themename")

let themesett = document.createElement("span")
themesett.setAttribute("style", "display: block;")
themesett.setAttribute("class", "L")
themesett.innerText = "Theme Settings"

let themesett2 = document.createElement("span")
themesett2.setAttribute("style", "display: block;")
themesett2.setAttribute("class", "M")
themesett2.innerText = "Text Color"

let themesett2_1 = document.createElement("input")
themesett2_1.setAttribute("style", "display: block;")
themesett2_1.setAttribute("type", "color")
themesett2_1.setAttribute("disabled", "")
themesett2_1.setAttribute("class", "M")

themesett2.append(themesett2_1)

let themesett3 = document.createElement("span")
themesett3.setAttribute("style", "display: block;")
themesett3.setAttribute("class", "M")
themesett3.innerText = "Button Color"

let themesett3_1 = document.createElement("input")
themesett3_1.setAttribute("style", "display: block;")
themesett3_1.setAttribute("type", "color")
themesett3_1.setAttribute("disabled", "")
themesett3_1.setAttribute("class", "M")

themesett3.append(themesett3_1)

let themesett4 = document.createElement("span")
themesett4.setAttribute("style", "display: block;")
themesett4.setAttribute("class", "M")
themesett4.innerText = "Button Hover Color"

let themesett4_1 = document.createElement("input")
themesett4_1.setAttribute("style", "display: block;")
themesett4_1.setAttribute("type", "color")
themesett4_1.setAttribute("disabled", "")
themesett4_1.setAttribute("class", "M")

themesett4.append(themesett4_1)

let themesett5 = document.createElement("span")
themesett5.setAttribute("style", "display: block;")
themesett5.setAttribute("class", "M")
themesett5.innerText = "Background Color"

let themesett5_1 = document.createElement("input")
themesett5_1.setAttribute("style", "display: block;")
themesett5_1.setAttribute("type", "color")
themesett5_1.setAttribute("disabled", "")
themesett5_1.setAttribute("class", "M")

themesett5.append(themesett5_1)

let themesett6 = document.createElement("span")
themesett6.setAttribute("style", "display: block;")
themesett6.setAttribute("class", "M")
themesett6.innerText = "NavBar Color"

let themesett6_1 = document.createElement("input")
themesett6_1.setAttribute("style", "display: block;")
themesett6_1.setAttribute("type", "color")
themesett6_1.setAttribute("disabled", "")
themesett6_1.setAttribute("class", "M")

themesett6.append(themesett6_1)

let themesettav = document.createElement("span")
themesettav.setAttribute("style", "display: block;")
themesettav.setAttribute("class", "L")
themesettav.innerText = "Advanced"

let themesettav_1 = document.createElement("button")
themesettav_1.setAttribute("class", "M-BTN")
themesettav_1.innerText = "Use"
themesettav_1.onclick = ()=>{

$.set("Ctheme", document.getElementById("themearea").value)
$.set("theme", "custom")
location.reload()
}

let themesettav_2 = document.createElement("button")
themesettav_2.setAttribute("class", "M-BTN")
themesettav_2.innerText = "Download"
themesettav_2.onclick = ()=>{

download(gtn(), ".scss", "text/scss", document.getElementById("themearea").value)

}

let themesettav2 = document.createElement("textarea")
themesettav2.setAttribute("style", "width:100%; height:65%; display: block; color: black; background-color: white;")
themesettav2.setAttribute("class", "M")
themesettav2.setAttribute("id", "themearea")
themesettav2.innerHTML = `
/* Don't Change This Unless You Don't Want Your Theme To Work */
@import "/static/css/main.scss";

/* Link Color */
a{
  color: white;
  text-decoration-color: lightgray;
}

/* Text Color */
*, .navtitle{
  color: white;
}
/* Background Color  */
body{
    background-color: black;
}

/* NavBar Color  */
.navbar{
    background-color: black;
}

/* Button Color  */
.M-BTN, .navbtns button{
  border-style:groove;
  border-width: 3px;
    background-color: black;
    border-color: gray;
  }

  /* Button Hover Color  */
  .M-BTN:hover, .navbtns button:hover{
    background-color: black;
    border-color: lightgray;
  }
`
themesettav.append(themesettav_1, themesettav_2, themesettav2)

NT.append(themename, themename2, themesett, themesett2, themesett3, themesett4, themesett5, themesett6, themesettav)
}


var browser = navigator.userAgent.toLowerCase();
var browserNonChr = browser.indexOf('firefox') > -1 || browser.indexOf('Safari') > -1 ||  browser.indexOf('OP') > -1 || browser.indexOf("MSIE") > -1 || 
browser.indexOf("rv:") > -1
  if (browserNonChr == true) {
    document.getElementById('LoadExistingTheme').remove()

      // other browsers
document.getElementById('LoadExistingThemeX').addEventListener('change', function selectedFileChanged() {
  if (this.files.length === 0) {
    console.log('No file selected.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function fileReadCompleted() {
    // when the reader is done, the content is in reader.result.
    console.log(reader.result);
    $.set("theme", "custom")
    $.set("Ctheme", reader.result.replace("/static", "").replace("/css", "/static/css"))
    location.reload()
  }
  reader.readAsText(this.files[0]);
})    
  }else{
    document.getElementById('LoadExistingThemeXBTN').remove()
    document.getElementById('LoadExistingThemeX').remove()

    var browserchr = browserNonChr != true 

// Normal
document.getElementById('LoadExistingTheme').addEventListener('click', async ()=>{
      
  let fileHandle
  
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
  
    let cont = contents
      $.set("theme", "custom")
      $.set("Ctheme", cont+"".replace("/static", "").replace("/css", "/static/css"))
  
  console.log(cont)
  
      location.reload()
  
  
    })

  }



document.getElementById("EditTheme").onclick=()=>{

  if (document.getElementById('NT') != null || document.getElementById('NT') != undefined){

    document.getElementById('NT').remove()
    
  }
  
  let NT = document.createElement("div")

NT.setAttribute("style", " margin-left: 1%; float: left; width: 75%; height: 270%; color: black; background-color: darkgray;")
NT.setAttribute("id", "NT")

document.body.append(NT)

let themename = document.createElement("span")
themename.setAttribute("class", "L")
themename.setAttribute("style", "display: block;")
themename.innerText = "Theme Editor"

  let themesettav = document.createElement("span")
  themesettav.setAttribute("style", "display: block;")
  themesettav.setAttribute("class", "L")
  themesettav.innerText = "Theme Name"

  let themename2 = document.createElement("input")
themename2.setAttribute("style", "display: block;")
themename2.setAttribute("class", "M-INP")
themename2.setAttribute("id", "themename")
  
  let themesettav_1 = document.createElement("button")
  themesettav_1.setAttribute("class", "M-BTN")
  themesettav_1.innerText = "Use"
  themesettav_1.onclick = ()=>{
  
  $.set("Ctheme", document.getElementById("themearea").value)
  $.set("theme", "custom")
  location.reload()
  }
  
  let themesettav_2 = document.createElement("button")
  themesettav_2.setAttribute("class", "M-BTN")
  themesettav_2.innerText = "Download"
  themesettav_2.onclick = ()=>{
  
  download(gtn(), ".scss", "text/scss", document.getElementById("themearea").value)
  
  }
  
  let themesettav2 = document.createElement("textarea")
  themesettav2.setAttribute("style", "margin-top: 3%; width:100%; height:65%; display: block; color: black; background-color: white;")
  themesettav2.setAttribute("class", "M")
  themesettav2.setAttribute("id", "themearea")
  themesettav2.innerHTML = document.getElementsByTagName("style")[0].innerHTML

  NT.append(themename, themesettav, themename2, themesettav_1, themesettav_2, themesettav2)

}


// if (document.getElementById('NT') != null || document.getElementById('NT') != undefined){

//   document.getElementById('NT').remove()
  
// }

}
