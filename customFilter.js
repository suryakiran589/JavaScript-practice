function arr(arg){
    this.array=arg
}
arr.prototype.customFilter=function(fun)
    {
        let i=0
        let newarr=[]
        while (i<this.array.length) {
            if(fun(this.array[i],i,this.array))
            {
                
            newarr.push(this.array[i])
            }
            
            i++
        }
       
        return newarr
        
    }
