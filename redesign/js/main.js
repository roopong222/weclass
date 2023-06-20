$(document).ready(function(){
    
    let scrollimg = $(".scrollimg")
    let target = $(".movTarget")
    let scrollimgTop = scrollimg.offset().top
    let scrollHeight = scrollimg.height()
    let moveTargetTop = target.offset().top
    let moveTargetHeight = target.height()
    let distance = moveTargetTop-scrollimgTop
    let basicStyle={
        "position": "absolute",
        "left": 0,
        "top": distance,
    }
    console.log(moveTargetTop)

    target.css(basicStyle)

    $(window).scroll(function(){
        let winst=$(window).scrollTop()
        
        if(winst>=moveTargetTop && winst<scrollimgTop+scrollHeight-moveTargetHeight){
            // console.log("작동중이고 스크롤증가량은: "+(winst-moveTargetTop))
            target.css("top",(distance+(winst-moveTargetTop))+"px")
        }else if(winst<moveTargetTop){
            
        }
    })


})