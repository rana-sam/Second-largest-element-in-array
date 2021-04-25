let array=[1,2,3,7,8,40,80,76,79,90]
let req,second=array[0]
for(var i=0;i<array.length;i++)
{
    if(array[i]>second)
    {
        req=second
        second=array[i];
    }
    else if(array[i]>req)
    {
        req=array[i]
    }
}
console.log(req);