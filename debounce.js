function debounce(callback){
  let timer;
  return function (...arg){  
    clearTimeout(timer)
    timer=setTimeout(() =>{
      callback(...arg)
    },1000)
  }
}
