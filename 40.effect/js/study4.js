// a=a+2  a+=2

    // let result =""
    // for(let i=1; i<=20; i++){
    //     result+=""

    // }
    
    // $(`.train`).html(result)

$(document).ready(function(){
    
    // for(let i=1; i<=20; i++){
    //     $(`.train`).append(`
    //     <li>
    //     <img class="small" src="./img/s${i}.jpg" alt="작은이미지${i}">
    //     <h2 class="title">art work ${i}</h2>
    //     <p>Artwork description comes here.<br>2023.06.20</p>
    //     <span class="btnClose">Close</span>
    //     </li>
    //     `)
    // }

    let result =""
    for(let i=0; i<20; i++){
        result+=`<li>
        <img class="small" src="./img/${artwork[i].imgFileName}" alt="${artwork[i].title}">
        <h2 class="title">${artwork[i].title}</h2>
        <p>${artwork[i].description}</p>
        <span class="btnClose">Close</span>
        </li>`
    }
    $(`.train`).html(result)

    $(`.stationMenu>li`).click(function(){
        let idx = $(this).index() //클릭한 리스트의 순번을 리턴함
        count = idx*5  //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작동되게끔 해주는 코드
        // 01 -> 0px
        // 06 -> -1000px
        // 11 -> -2000px
        // 16 -> -3000px
        $(`.train`).css(`transform`,`translateX(${idx*-1000}px)`)
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $(`.con2`).offset().top
        if(winst >= con2top){
            $(`.con2`).addClass(`on`)
        }else{
            $(`.con2`).removeClass(`on`)
        }
    })

    let count = 0
    $(`.station`).on(`wheel DOMMouseScroll`,function(event){
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){ // event.originalEvent안에.detail가 있으면 참 없으면 거짓
            delta = E.detail*-40
            // 파이어폭스는 detail
        }else{
            delta = E.wheelDelta
            // 크롬은 wheelDelta
        }


        if(delta<0){
            count++
            if(count>19){count=19}
            //마우스휠을 내렸을 때
            $(`.train`).css(`transform`,`translateX(${-200*count}px)`)
        }
        else{
            //마우스휠을 올렸을 때
            count--
            if(count<0){count=0}
            //마우스휠을 내렸을 때
            $(`.train`).css(`transform`,`translateX(${-200*count}px)`)
        }
        return false

    })

    $(`.train>li`).click(function(){
        $(`.train>li`).removeClass(`on`)
        $(this).addClass(`on`)
        let idx = $(this).index()
        $(`.train`).css(`transform`,`translateX(${-200*idx}px)`)
        count = idx
    })

    $(`.btnClose`).click(function(){
        $(`.train>li`).removeClass(`on`)
        return false //상위태그로 클릭이벤트가 전달되지않게(버블링되지않게)설정
    })

})