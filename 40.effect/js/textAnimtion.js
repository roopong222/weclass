    // aniDelay 글자들이 나타나는 간격
    // aniSpeed 글자들이 나타나는 속도
    // textsize 글자들에게 적용하는 크기

function textAni(cssSelector,option){
    let animationterm = option.aniDelay?option.aniDelay:0.5
    let animationDuration = option.aniSpeed?option.aniSpeed:1
    let aniTxtSize = option.textSize?option.textSize:20
    $(cssSelector).css(`font-size`,`0`)
    $(`${cssSelector} b`).css(`line-height`,`1`).css(`opacity`,`0`).css(`display`,`inline-block`).css(`font-size`,`${aniTxtSize}px`)


    for(let i=0; i<$(`${cssSelector} b`).length; i++){
        $(`${cssSelector} b`).eq(i).css(`animation`,`introAni ${animationDuration}s linear ${animationterm*i}s forwards`)
    }
}