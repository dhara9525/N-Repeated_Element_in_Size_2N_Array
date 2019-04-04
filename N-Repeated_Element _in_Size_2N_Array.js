/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) 
{
    var length_2n, length_n, result_key ;
    var myMap = new Map();
    length_2n=A.length;
    length_n=Math.round(length_2n/2);
    
    for(var i=0;i<length_2n;i++)
    {
        if(myMap.get(A[i])==undefined)
            {
                myMap.set(A[i],1);
            }
        else
            {
                myMap.set(A[i],(myMap.get(A[i])+1) );
            }
    }
    /*
    for (var key of myMap.keys()) 
    {
         console.log('key '+key);
    }
    for (var value of myMap.values()) 
    {
         console.log('value '+value);
    }
    */

    myMap.forEach
    (
        function(value,key)
        {
            console.log(value);
        if(value==length_n)
            {
             result_key=key;
            }
        }
    )
    return result_key;
};