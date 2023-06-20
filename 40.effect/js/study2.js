$(document).ready(function(){

    // let animationterm = 0.25
    // let animationDuration = 0.3
    // let bleng =$(`.flotingTxt h1 b`).length
    // 선택한 태그들은 배열형태로 리턴된다 그래서 배열의 원소개수를 .length를 통해 구해볼 수 있다.

    // for(let i=0; i<bleng; i++){
    //     // $(`.flotingTxt h1 b:nth-of-type(${i+1})`).css(`animation`,`introAni 1s ease ${0.25*i}s forwards`)

    //     $(`.flotingTxt h1 b`).eq(i).css(`animation`,`introAni ${animationDuration}s linear ${animationterm*i}s forwards`)
    // }


    function textAni(cssSelector,option){
        let animationterm = option.aniDelay
        let animationDuration = option.aniSpeed
        $(cssSelector).css(`font-size`,`0`)
        $(`${cssSelector} b`).css(`line-height`,`1`).css(`opacity`,`0`).css(`display`,`inline-block`).css(`font-size`,`${option.textsize}px`)


        for(let i=0; i<$(`${cssSelector} b`).length; i++){
            $(`${cssSelector} b`).eq(i).css(`animation`,`introAni ${animationDuration}s linear ${animationterm*i}s forwards`)
        }
    }

    textAni(`.flotingTxt`,{
        aniDelay:0.2,
        aniSpeed:0.3,
        textsize:50,
    })

    textAni(`.txtbox`,{
        aniDelay:0.2,
        aniSpeed:0.3,
        textsize:50,
    })
})