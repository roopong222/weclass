$(document).ready(function(){
    $(`.tabMenu>dt`).click(function(){
        $(`.tabMenu>dt`).removeClass(`on`)
        $(this).addClass(`on`)
    })
})