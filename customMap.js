function arr(arg){
    this.array=arg
    

    
}
arr.prototype.mapClone=function(fun)
    {
        let i=0
        let newarr=[]
        while (i<this.array.length) {
            newarr.push(fun(this.array[i]))
            
            i++
        }
        // console.log(this.newarr)
        // console.log(this.array)
        return newarr
        
    }