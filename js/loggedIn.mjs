import { $ } from "./mods/html.mjs"

let inyorn = $.get('uid')

if (inyorn !== null){
    
    let ee = $.getById('Nhere')
    let ee2 = $.getById('Nhere2')

    $.dele(ee)
    $.dele(ee2)
}

document.addEventListener('DOMContentLoaded', function() {

    let str = String(window.location.href)

    let last = str[str.length - 1]
if(last == "/" && window.location.pathname != "/"){

window.location.href = str.slice(0, -1) + ' '

}
})