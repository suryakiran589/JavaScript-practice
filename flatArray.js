function flat(arr,res=[]){

  for(let i=0;i<arr.length;i++){
    if(typeof arr[i] == "object" ){
      console.log(arr[i])
      flat(arr[i],res)
    }
    else{
      res.push(arr[i])
    }
  }

  return res
}
