window.onload=function(){
    let btn1 = document.querySelector(`.btnClick`)
    btn1.addEventListener(`click`,function(){
        // 클릭했을 때 실행되는 소스코드
        document.querySelector(`.textbox`).style.color=`black`
    })

    let btnpop = document.querySelector(`.btnPopup`)
    btnpop.addEventListener(`click`,function(){
        document.querySelector(`.hiddenPopup`).classList.add(`show`)
    })
    
    let btclose = document.querySelector(`.btnPopupClose`)
    btclose.addEventListener(`click`,function(){
        document.querySelector(`.hiddenPopup`).classList.remove(`show`)
    })
}
