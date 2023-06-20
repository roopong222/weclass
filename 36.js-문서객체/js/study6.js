window.onload=function(){
    let menuState = false
    let Menu = document.querySelector(`.btnMenu`)
    let nav = document.querySelector(`nav`)
    Menu.addEventListener(`click`,function(){
        if(menuState == false){
            //메뉴가 닫혀있는경우
            Menu.classList.add(`close`)
            nav.classList.add(`show`)
            menuState = true
        }else{
            //메뉴가 열려있는경우
            Menu.classList.remove(`close`)
            nav.classList.remove(`show`)
            menuState = false
        }
    })   
}