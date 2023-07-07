 $(document).ready(function(){

    
    let windowWidth = $(window).width()
    if(windowWidth>=768){
        let winHeight = $(window).height()
        let posFirstTop = $(".value_box").offset().top
        let boxValHeight = $(".value_box").height()
        let style1 = {"position":"fixed","left": 0,"top": winHeight-boxValHeight,"z-index": 1000}
        let style2 = {"position":"relative","left":"auto","top":"auto","z-index":0,}
        let scrollPlusToPadding = 0;
        $(window).scroll(function(){
            let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산
            let winHeight = $(window).height()-boxValHeight //브라우저화면의 높이를 계산

            if(winst+winHeight>=posFirstTop && winst+winHeight <= 5019){
                // scrollPlusToPadding = winst - boxValHeight
                // console.log(winst+winHeight)
                $(".value_box").css(style1)
                $(".s2banner").css("padding-top",4000)
                $(".s2banner").css("padding-bottom",619)
                if(winst+winHeight >= 1150 && winst+winHeight <= 1300){ 
                $(`.value_list>li`).removeClass(`on`)
                $(`.bgimg>div`).eq(3).css(`opacity`,1)
                }else if(winst+winHeight >= 1301 && winst+winHeight <= 2200){ 
                $(`.bgimg>div`).css(`opacity`,0)
                $(`.value_list>li`).removeClass(`on`)
                $(`.value_list>li`).eq(0).addClass(`on`)
                $(`.bgimg>div`).eq(3).css(`opacity`,1)
                $(`.bgimg>div`).eq(0).css(`opacity`,1)
                }else if(winst+winHeight >= 2201 && winst+winHeight <= 3100){
                $(`.bgimg>div`).css(`opacity`,0)
                $(`.value_list>li`).removeClass(`on`)
                $(`.value_list>li`).eq(1).addClass(`on`)
                $(`.bgimg>div`).eq(3).css(`opacity`,1)
                $(`.bgimg>div`).eq(1).css(`opacity`,1)
                }else if(winst+winHeight >= 3101 && winst+winHeight <= 4000){
                $(`.bgimg>div`).css(`opacity`,0)
                $(`.value_list>li`).removeClass(`on`)
                $(`.value_list>li`).eq(2).addClass(`on`)
                $(`.bgimg>div`).eq(3).css(`opacity`,1)
                $(`.bgimg>div`).eq(2).css(`opacity`,1)
                }else if(winst+winHeight >= 4001 && winst+winHeight <= 4300){
                $(`.value_list>li`).removeClass(`on`)
                $(`.bgimg>div`).eq(3).css(`opacity`,1)
                }
            }else if(winst < posFirstTop){
                $(".s2banner").css("padding-top",0)
                $(".s2banner").css("padding-bottom",4000)
                $(".value_box").css(style2)
            }else{
                $(".value_box").css(style2)
                $(".s2banner").css("padding-bottom",0)
            }
        })
    }
    
 })