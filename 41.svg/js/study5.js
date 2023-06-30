$(document).ready(function(){

    let pathLength = $(`#progress path`).get(0).getTotalLength()

    let Frametop = $(`.fixedFrame`).offset().top
    let contop = $(`.contents`).offset().top
    let moAreah = $(`.movingArea`).height()
    let introh = $(`.intro`).height()
    let inconh = contop-introh-moAreah

    $(`#progress path`).css(`stroke-dasharray`,pathLength)
    $(`#progress path`).css(`stroke-dashoffset`,pathLength)

    $(window).scroll(function(){
        let wintop = $(window).scrollTop()
        let dstens = wintop-Frametop

        if(dstens<0){
            $(`.movingArea`).css(`position`,`absolute`)
            $(`.movingArea`).css(`left`,`0`)
            $(`.movingArea`).css(`top`,`0`)
        }
        if(dstens>0 && dstens<inconh){
            $(`.movingArea`).css(`position`,`fixed`)
            $(`.movingArea`).css(`top`,`0`)
            $(`.movingArea`).css(`left`,`0`)
            
            let per = (dstens/inconh*100) // 0~100까지의 수
            $(`#progress path`).css(`stroke-dashoffset`,pathLength-(pathLength*per/100))
            $(`.per`).text(Math.round(per)+`%`)

            let per2 = (dstens/inconh*87.5) // 0~87.5 까지의 수
            $(`.train`).css(`transform`,`translateX(-${per2}%)`)



        }else if(dstens>inconh){
            $(`.movingArea`).css(`position`,`absolute`)
            $(`.movingArea`).css(`left`,`0`)
            $(`.movingArea`).css(`top`,`${inconh}px`)
        }
    })
})