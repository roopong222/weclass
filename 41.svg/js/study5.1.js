$(document).ready(function(){

    let pathLength = $("#progress path").get(0).getTotalLength()
    $("#progress path").css("stroke-dasharray",pathLength)
    $("#progress path").css("stroke-dashoffset",pathLength)

    $(window).scroll(function(){
        let winTop = $(window).scrollTop()
        let fixedTop = $(".fixedFrame").offset().top
        let distance = winTop-fixedTop // 0~7200까지 증가하는 숫자
        let movingAreaHeight = $(".movingArea").height()

        if(distance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
        }
        if(distance>=0 && distance <= 8000-movingAreaHeight){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
            // console.log(distance)
            let ratio = distance/(8000-movingAreaHeight) // 전체 애니메이션 구간길이 대비 스크롤한 거리비율 0~1까지의 수로 표현

            let percent = (ratio*100) // 0~100까지의 수
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")

            let percent2 = (ratio*(87.5)) // 0~87.5까지의 수
            $(".train").css("transform","translateX(-"+percent2+"%)")

            let count = (percent2/(100/8))
            let idx = Math.round(count)
            console.log(idx,count)
            $(".train>li").removeClass("on")
            $(".train>li").eq(idx).addClass("on")
            $(".train>li").eq(idx).find("b").css("transform","rotateY("+((count*2)*180)+"deg)")


        }
        if(distance>8000-movingAreaHeight){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top",(8000-movingAreaHeight)+"px")
        }


    })


})