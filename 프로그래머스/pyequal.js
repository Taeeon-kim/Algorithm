function solution(s){
    
    if(s.length<=50 && s.length >0){
        return (s.match(/p/ig) == null && s.match(/y/ig)== null) ? true : (s.match(/p/ig) == null || s.match(/y/ig)== null) ?  false : (s.match(/y/gi).length === s.match(/p/gi).length)  ? true : false ;
    }
    }

    var a = "ooo"

    // var result= a.match(/p/gi).length
    console.log(solution(a))