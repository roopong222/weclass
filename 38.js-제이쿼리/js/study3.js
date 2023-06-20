$(document).ready(function(){

    $(`.btn1`).click(function(e){
        e.preventDefault() //선택한 태그가 갖는 기본기능을 억제함.
        $(`.textFrame`).css(`color`,`blue`)
    })

    $(`.textFrame`).mouseover(function(){
        // $(`.textFrame`).css(`text-decoration`,`underline`)
        $(this).css(`text-decoration`,`underline`)
    })
    $(`.textFrame`).mouseout(function(){
        // $(`.textFrame`).css(`text-decoration`,`none`)
        $(this).css(`text-decoration`,`none`)
    })











})