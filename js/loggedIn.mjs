import { $ } from "/js/mods/html.mjs"

let inyorn = $.get('uid')

if (inyorn !== null){
    
    let ee = $.getById('Nhere')
    let ee2 = $.getById('Nhere2')

    $.dele(ee)
    $.dele(ee2)
}
