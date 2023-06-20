$(document).ready(function(){

    let count = 0

    $(`.btnNext`).click(function(){
        count++
        if(count>3){count=0}
        slideMove(count)
        // $(`.train`).css(`transform`,`translateX(-${count*25}%)`)
        $(`.train>li`).removeClass(`on`)
        $(`.pagination>li`).removeClass(`on`)
        $(`.train>li`).eq(count).addClass(`on`)
        $(`.pagination>li`).eq(count).addClass(`on`)
    })

    $(`.btnPrev`).click(function(){
        count--
        if(count<0){count=3}
        slideMove(count)
        // $(`.train`).css(`transform`,`translateX(-${count*25}%)`)
        $(`.train>li`).removeClass(`on`)
        $(`.pagination>li`).removeClass(`on`)
        $(`.train>li`).eq(count).addClass(`on`)
        $(`.pagination>li`).eq(count).addClass(`on`)
    })

    $(`.pagination>li`).click(function(){
        count = $(this).index()
        $(`.pagination>li`).removeClass(`on`)
        $(`.train>li`).removeClass(`on`)
        $(`.train>li`).eq(count).addClass(`on`)
        $(this).addClass(`on`)
        // $(`.train`).css(`transform`,`translateX(-${count*25}%)`)
        slideMove(count)
    })

    function slideMove(idx){
        $(`.train`).css(`transform`,`translateX(-${idx*25}%)`)
    }
})