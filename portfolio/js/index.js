$(document).ready(function(){
    const popupstation = new Swiper('.popupstation', {
        slidesPerView: 3,
        spaceBetween: 55,
        pagination: {
            el:".popuptrain-pagination",
            type:"progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const bannerstation = new Swiper('.bannerstation', {
        slidesPerView: 1,
        // spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".bannerstation-pagination",
            type: "progressbar",
        },
    });

    $(`.popuptrain>li`).click(function(e){
        e.preventDefault()
        $(`.popuplayout`).addClass(`on`)
        let count = ($(this).index())
        $(`.popuplayoutdl>dt`).removeClass(`on`)
        $(`.popuplayoutdl>dt`).eq(count).addClass(`on`)
    })

    $(`.pclose`).click(function(e){
        e.preventDefault()
        $(`.popuplayout`).removeClass(`on`)
    })
    
    $(`.popuplayoutdl>dt`).click(function(e){
        e.preventDefault()
        $(`.popuplayoutdl>dt`).removeClass(`on`)
        $(this).addClass(`on`)
    })

    $(`.bannerlayoutul>li`).click(function(e){
        e.preventDefault()
        $(`.bannerstation`).addClass(`on`)
        let count2 = $(this).index()
        bannerstation.slideToLoop(count2, 500)
    })

    $(`.bclose`).click(function(e){
        e.preventDefault()
        $(`.bannerstation`).removeClass(`on`)
    })

    

})