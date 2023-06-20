$(document).ready(function(){
    let count = 0
    let perView;
    // train클래스 너비를 변경 => train클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
    let stationWidth;
    let trainWidth;

    // if($(window).width()>=1024){
    //     perView = 2.5;
    //     stationWidth = $(`.station`).width()
    //     trainWidth = stationWidth * 5 / perView
    //     $(`.train`).width(trainWidth)
    // }else if($(window).width()>=768){
    //     perView = 2;
    //     stationWidth = $(`.station`).width()
    //     trainWidth = stationWidth * 5 / perView
    //     $(`.train`).width(trainWidth)
    // }else{
    //     perView = 1;
    //     stationWidth = $(`.station`).width()
    //     trainWidth = stationWidth * 5 / perView
    //     $(`.train`).width(trainWidth)
    // }

    let ww = $(window).width()
    if(ww>=1024){
        perView = 2.5;
        stationWidth = $(`.station`).width()
        trainWidth = stationWidth * 5 / perView
        $(`.train`).width(trainWidth)
    }else if(ww>=768){
        perView = 2;
        stationWidth = $(`.station`).width()
        trainWidth = stationWidth * 5 / perView
        $(`.train`).width(trainWidth)
    }else{
        perView = 1;
        stationWidth = $(`.station`).width()
        trainWidth = stationWidth * 5 / perView
        $(`.train`).width(trainWidth)    
    }


    $(window).resize(function(){
        let ww = $(window).width()
        if(ww>=1024){
            stationWidth = $(`.station`).width()
            perView = 2.5;
            trainWidth = stationWidth * 5 / perView
            $(`.train`).width(trainWidth)
        }else if(ww>=768){
            perView = 2;
            stationWidth = $(`.station`).width()
            trainWidth = stationWidth * 5 / perView
            $(`.train`).width(trainWidth)
        }else{
            perView = 1;
            stationWidth = $(`.station`).width()
            trainWidth = stationWidth * 5 / perView
            $(`.train`).width(trainWidth)    
        }
    
    })

    $(`.btnNext`).click(function(e){
        e.preventDefault()
        count++
        if(count>4){count = 4}
        // $(`.train`).css(`transform`,`translateX(${count*-20}%)`)
        moveSlider(count)
    })

    $(`.btnPrev`).click(function(e){
        e.preventDefault()
        count--
        if(count<0){count = 0}
        // $(`.train`).css(`transform`,`translateX(${count*-20}%)`)
        moveSlider(count)
    })


    // 자동슬라이드

    let Timer = setInterval(function(){
        count++
        if(count>4){count = 0}
        moveSlider(count)
    },2000)

    $(`.station`).mouseout(function(){
        Timer = setInterval(function(){
            count++
            if(count>4){count = 0}
            moveSlider(count)
        },2000)
    })

    $(`.station`).mouseover(function(){
        clearInterval(Timer)
    })

    function moveSlider(idx){
        $(`.train`).css(`transform`,`translateX(${idx*-20}%)`)
    }
})