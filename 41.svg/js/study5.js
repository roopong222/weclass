$(document).ready(function(){

    let Frametop = $(`.fixedFrame`).offset().top
    let contop = $(`.contents`).offset().top
    let moAreah = $(`.movingArea`).height()
    let introh = $(`.intro`).height()
    let inconh = contop-introh-moAreah

    let pathLength = $(`#progress path`).get(0).getTotalLength()

    $(`#progress path`).css(`stroke-dasharray`,pathLength)
    $(`#progress path`).css(`stroke-dashoffset`,pathLength)

    $(window).scroll(function(){
        let wintop = $(window).scrollTop()


        if(wintop-Frametop<0){
            $(`.movingArea`).css(`position`,`absolute`)
            $(`.movingArea`).css(`left`,`0`)
            $(`.movingArea`).css(`top`,`0`)
        }
        if(wintop-Frametop>0 && wintop-Frametop<inconh){
            $(`.movingArea`).css(`position`,`fixed`)
            $(`.movingArea`).css(`top`,`0`)
            $(`.movingArea`).css(`left`,`0`)
           let per = ((wintop-Frametop)/inconh*100)
           $(`#progress path`).css(`stroke-dashoffset`,pathLength-(pathLength*per/100))
           $(`.per`).text(Math.round(per)+`%`)

        }else if(wintop-Frametop>inconh){
            $(`.movingArea`).css(`position`,`absolute`)
            $(`.movingArea`).css(`left`,`0`)
            $(`.movingArea`).css(`top`,`${inconh}px`)
        }
    })
})