$(document).ready(function(){
    const sliderswiper = new Swiper('.popupstation', {
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
    $(`.popuptrain>li`).click(function(e){
        e.preventDefault()
        $(`.popuplayout`).addClass(`on`)
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
})