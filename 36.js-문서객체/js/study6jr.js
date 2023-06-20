$(document).ready(function(){
    let a = false
    $(`.btnMenu`).click(function(){
        if(a == false){
            $(`.btnMenu`).addClass(`close`)
            $(`nav`).addClass(`show`)
            a = true
        }else{
            $(`.btnMenu`).removeClass(`close`)
            $(`nav`).removeClass(`show`)
            a = false
        }
    })

})