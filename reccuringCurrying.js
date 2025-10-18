function outer(x){
  return function (y){
    if(y == undefined){
      return x
    }
    return outer(x+y)
  }
}
