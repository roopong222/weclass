$(document).ready(function(){

    $(`.box`).click(function(){
        alert(`box클래스를 클릭하였습니다.`)
    })

    $(`.btn`).click(function(){
        alert(`span태그를 클릭하였습니다.`)
        return false
    })
})