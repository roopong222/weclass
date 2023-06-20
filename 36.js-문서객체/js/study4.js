window.onload=function(){
    let title = document.querySelector(`#title`)
    title.style.color = `blue`

    let titleParent = title.parentElement
    titleParent.style.border = `1px solid blue`

    let ulTag = document.querySelector(`.list`)
    let liTag = ulTag.children
    
    for(i=0; i<liTag.length; i++){
        liTag[i].style.borderBottom = `1px solid black`
    }

    title.nextElementSibling.style.background = `lightblue`
    liTag[0].nextElementSibling.nextElementSibling.style.color = `red`
    ulTag.previousElementSibling.style.textDecoration = `underline`
}