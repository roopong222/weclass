window.onload = function(){
    let nextbtn = document.querySelector(`.btnNext`)
    let prevbtn = document.querySelector(`.btnPrev`)
    let train = document.querySelector(`.train`)
    let pagination = document.querySelectorAll(`.pagination>li`)
    let trainList = train.children
    let count = 0

    nextbtn.addEventListener(`click`,function(){
        count++
        if(count>3){count=0}
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove(`on`)
            pagination[i].classList.remove(`on`)
        }
        trainList[count].classList.add(`on`)
        pagination[count].classList.add(`on`)
        
        train.style.transform = `translateX(-${25*count}%)`
    })

    prevbtn.addEventListener(`click`,function(){
        count--
        if(count<0){count=3}
        for(let i=0; i<trainList.length; i++){
            trainList[i].classList.remove(`on`)
            pagination[i].classList.remove(`on`)
        }
        trainList[count].classList.add(`on`)
        pagination[count].classList.add(`on`)
        
        train.style.transform = `translateX(-${25*count}%)`
    })

    for(let k=0; k<pagination.length; k++){
        pagination[k].addEventListener(`click`,function(){
            count = k //순번에 맞는 인덱스를 카운트변수에 저장한다.
            for(let i=0; i<trainList.length; i++){
                trainList[i].classList.remove(`on`)
                pagination[i].classList.remove(`on`)
            }
            trainList[k].classList.add(`on`)
            pagination[k].classList.add(`on`)
    
            train.style.transform = `translateX(-${25*k}%)`
        })
    }
    
    // pagination[1].addEventListener(`click`,function(){
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove(`on`)
    //         pagination[i].classList.remove(`on`)
    //     }
    //     trainList[1].classList.add(`on`)
    //     pagination[1].classList.add(`on`)

    //     train.style.transform = `translateX(-${25*1}%)`
    // })
}