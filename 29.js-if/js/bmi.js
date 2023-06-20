function getBMI(uc,uk){
    let result;
    result = uk / Math.pow((uc/100),2)
    return result
}

function getBMI_result(bmiNum){
    let result;
    if(bmiNum>=25){
        result = `비만`
    }else if(bmiNum>=23 && bmiNum<=24.9){
        result = `과체중`
    }else if(bmiNum>=18.5 && bmiNum<=22.9){
        result = `정상`
    }else{
        result = `저체중`
    }   
    return result
}

function showResult(uname,ucm,ukg,ubmi,ubmiresult){
    document.write(
    `<table class="gradeStyle">
        <caption>${uname}님의 비만도 검사결과</caption>
        <tr>
            <th>신장</th>
            <td>${ucm}cm</td>
        </tr>
        <tr>
            <th>체중</th>
            <td>${ukg}kg</td>
        </tr>
        <tr>
            <th>bmi</th>
            <td>${ubmi}</td>
        </tr>
        <tr>
            <th>결과</th>
            <td>${ubmiresult}</td>
        </tr>
    </table>`
    )
}