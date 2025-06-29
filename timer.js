function func()
{ 
  let min = minutes.value || 0
let sec= seconds.value ||0
  let interval=setInterval(()=>{
  h.innerText=`Minutes ${parseInt(min)} Seconds ${parseInt(sec)}`

  sec--
  if(sec <0)
  {
    if(min ==0)
    {
    clearInterval(interval)
    }
    else{
    min=min-1
    sec =59
  }
}
},1000)
}