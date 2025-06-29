var subsets = function(nums) {
    let result =[]        
    function recur(index,sub){
        result.push([...sub])
        for(let i=index;i<nums.length;i++){
            sub.push(nums[i])
            recur(i+1,sub)
            sub.pop()
        }

    }
    recur(0,[])
    return result
};