$(document).ready(function(){
    // 마우스를 움직이면 cursor클래스가 따라다니도록

    $(document).mousemove(function(e){
        let posX = e.clientX
        let posY = e.clientY
        console.log(posX,posY)
        $(`.cursor`).css(`left`,posX-15+`px`)
        $(`.cursor`).css(`top`,posY-15+`px`)
        $(`.cursor`).addClass(`on`)
        $(`.cursorGuideBox`).css(`left`,(posX+150)+`px`)
        $(`.cursorGuideBox`).css(`top`,posY-15+`px`)
        
    })

    $(`.slider`).mouseover(function(){
        $(`.cursor`).addClass(`big`)
        let txt = $(`.slider`).attr(`data-desc`)
        $(`.cursorGuideBox`).text(txt)
        // $(`.cursorGuideBox`).addClass(`on`)
    })
    $(`.slider`).mouseout(function(){
        $(`.cursor`).removeClass(`big`)
        // $(`.cursorGuideBox`).removeClass(`on`)
    })
})