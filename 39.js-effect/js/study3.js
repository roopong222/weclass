$(document).ready(function(){

    $(window).scroll(function(){

        let wtop = $(window).scrollTop()
        if(wtop>400){
            $(`header`).addClass(`sma`)
        }else{
            $(`header`).removeClass(`sma`)
        }
    });

    // function moveScroll(top,speed){
    //     $(`html,body`).stop().animate({scrollTop:top},speed)
    // }

    function moveScroll(option){
        $(`html,body`).stop().animate({scrollTop:option.top},option.speed)
    }

    $(`.btnTOP`).click(function(){
        // $(`html,body`).stop().animate({scrollTop:0},1000)
        // moveScroll(0,500)
        moveScroll({top:0,speed:500})
    });    

    //각각의 메뉴리스트를 클릭했을 때 해당되는 영역으로 부드럽게 스크롤이동될 수 있도록
    $(`.gnb>li>a`).click(function(e){
        e.preventDefault() //a태그가 갖고있는 기본기능을 제거

        let target = $(this).attr(`href`)
        // 클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다.(문자데이터형태로 `#s1`...)
        let target_top = $(target).offset().top
        // $(`html,body`).stop().animate({scrollTop:target_top},1000)
        // moveScroll(target_top,1000)
        moveScroll({top:target_top,speed:1000})

    })


})