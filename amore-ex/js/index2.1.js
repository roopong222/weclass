window.onload = function(){
    // let bannertabMeun = document.querySelectorAll(`.bannertabMeun>dt`)
    // for(let i=0; i<bannertabMeun.length; i++){
    //     bannertabMeun[i].addEventListener(`click`,function(){
    //         for(let j=0; j<bannertabMeun.length; j++){
    //             bannertabMeun[j].classList.remove(`on`)
    //         }
    //         this.classList.add(`on`)
    //     })
    // }

    // let tabMeun2 = document.querySelectorAll(`.tabMeun2>dt`)
    // for(let i=0; i<tabMeun2.length; i++){
    //     tabMeun2[i].addEventListener(`click`,function(){
    //         for(let j=0; j<tabMeun2.length; j++){
    //             tabMeun2[j].classList.remove(`on`)
    //         }
    //         this.classList.add(`on`)
    //     })
    // }

    function meun(name){
        let tap = document.querySelectorAll(`.${name}>dt`)
        for(let i=0; i<tap.length; i++){
            tap[i].addEventListener(`click`,function(){
                for(let j=0; j<tap.length; j++){
                    tap[j].classList.remove(`on`)
                }
                this.classList.add(`on`)
            })
        }
    }
    meun(`bannertabMeun`)
    meun(`tabMeun2`)
}