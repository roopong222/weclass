window.onload = function(){
    let tabTitles = document.querySelectorAll(`.tabTit>li`)
    let tabDes = document.querySelector(`.tabDes`)
    let tabDescription = [
    `<h3>title1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere nesciunt numquam voluptatem deserunt dolorem, vitae sunt sit consequatur ex, officia nobis nemo expedita mollitia excepturi assumenda quasi ipsum! Adipisci.</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere nesciunt numquam voluptatem deserunt dolorem, vitae sunt sit consequatur ex, officia nobis nemo expedita mollitia excepturi assumenda quasi ipsum! Adipisci.</p>`,
    `<h3>title3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere nesciunt numquam voluptatem deserunt dolorem, vitae sunt sit consequatur ex, officia nobis nemo expedita mollitia excepturi assumenda quasi ipsum! Adipisci.</p>`,
    ]
    for(let i=0; i<tabTitles.length; i++){
        tabTitles[i].addEventListener(`click`,function(){

            for(let j=0; j<tabTitles.length; j++){
                tabTitles[j].classList.remove(`on`)
            }

            this.classList.add(`on`)

            tabDes.innerHTML = tabDescription[i]
        })
    }




}