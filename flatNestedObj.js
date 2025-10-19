function flatObject(obj,parent="",res={}){

  for(let key in obj){
    if(typeof obj[key] == 'object'){
      flatObject(obj[key],parent+key+".",res)
    }
    else{
      if(parent){

      res[parent+key] = obj[key]
      }
      else{
        res[key] =obj[key]
      }
    }
  }

  return res
}
