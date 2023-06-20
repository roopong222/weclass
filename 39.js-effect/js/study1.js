$(document).ready(function(){
    $(`.btnMenu`).click(function(){
        //$(선택된태그).hasClass(`on`)
        //선택한태그가 on이라는 클래스가 있다면 사용된자리에 true를 리턴하고
        //선택한태그가 on이라는 클래스가 없다면 사용된자리에 false를 리턴하는 함수
        if($(`nav`).hasClass(`on`) == false){
            $(`nav`).addClass(`on`)
        }
        else{
            $(`nav`).removeClass(`on`)
        }
    })

    // $(`.gnb>li`).click(function(){
    //     $(`.gnb>li`).css(`height`,`50px`)
    //     // 여러개의 리스트 중 내가 클릭한 리스트가 포함하고있는 2뎁스 ul태그의 자식 li태그의 개수를 구해서 그 개수에 비례한 만큼의 값으로 클릭한 리스트의 높이를 지정
    //     let li2depth = $(this).children(`ul`).children().length
    //     $(this).css(`height`,(li2depth+1)*50+`px`)
    // })
    
    $(`.gnb>li`).click(function(){
        if($(this).hasClass(`on`) == true){
            $(this).css(`height`,`50px`)
            $(this).removeClass(`on`)
        }  
        else{
            let li2depth = $(this).children(`ul`).children().length
            $(`.gnb>li`).css(`height`,`50px`)
            $(`.gnb>li`).removeClass(`on`)
            $(this).css(`height`,(li2depth+1)*50+`px`)
            $(this).addClass(`on`)
        }
    })

    $(`.gnb>li>ul`).click(function(){
        return false;
        
    })
})