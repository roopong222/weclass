function Person(userName,userAge){
    this.name = userName
    this.age = userAge
    this.feel = Math.floor(Math.random()*3)
    this.sayhello = function(){
        if(this.feel == 0){
            document.write(`<p>${this.name}님은 기분이좋습니다.</p>`)
        }
        else if(this.feel == 1){
            document.write(`<p>${this.name}님은 기분이쏘쏘합니다.</p>`)
        }
        else {
            document.write(`<p>${this.name}님은 화가납니다.</p>`)
        }
    }
}