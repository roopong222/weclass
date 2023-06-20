$(document).ready(function(){
    $(`.gnb`).mouseover(function(){
        $(`header`).addClass(`on`)
    })

    $(`.gnb`).mouseout(function(){
        $(`header`).removeClass(`on`)
    })

})