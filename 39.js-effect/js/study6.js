$(document).ready(function(){
    count = 0

    function moslider(ct){
        $(`.train`).css(`transform`,`translateY(-${ct*20}%)`)
    }

    $(`.btnNext`).click(function(e){
        e.preventDefault() //클릭했을 때 a 태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
        count++
        if(count>4){count=0}

        // $(`.train`).css(`transform`,`translateY(-${count*20}%)`)
        moslider(count)

    })

    $(`.btnPrev`).click(function(e){
        e.preventDefault() //클릭했을 때 a 태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
        count--
        if(count<0){count=0}

        // $(`.train`).css(`transform`,`translateY(-${count*20}%)`)
        moslider(count)

    })

    let Timeer = setInterval(function(){
        count++
        if(count>4){count=0}
        // $(`.train`).css(`transform`,`translateY(-${count*20}%)`)
        moslider(count)
    }, 2500);

    $(`.station`).mouseover(function(){
        clearInterval(Timeer)
    })
    $(`.station`).mouseout(function(){
        Timeer = setInterval(function(){
            count++
            if(count>4){count=0}
            // $(`.train`).css(`transform`,`translateY(-${count*20}%)`)
            moslider(count)
        }, 2500);
    })
})