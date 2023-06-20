$(document).ready(function(){

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $(`.con2`).offset().top
        if(winst >= con2top){
            $(`.con2`).addClass(`on`)
        }else{
            $(`.con2`).removeClass(`on`)
        }
    })

    $(`.wrap>div`).on(`wheel DOMMouseScroll`,function(event){
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){ // event.originalEvent안에.detail가 있으면 참 없으면 거짓
            delta = E.detail*-40
            // 파이어폭스는 detail
        }else{
            delta = E.wheelDelta
            // 크롬은 wheelDelta
        }


        if(delta<0){
            //마우스휠을 내렸을 때
            if($(this).next().length!=0){
                let posTop = $(this).next().offset().top
                $(`html,body`).stop().animate({scrollTop:posTop},1000)
            }
        }
        else{
            //마우스휠을 올렸을 때
            if($(this).prev().length!=0){
                let posTop = $(this).prev().offset().top
                $(`html,body`).stop().animate({scrollTop:posTop},1000)
            }
        }
        return false

    })



})