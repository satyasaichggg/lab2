function sum1(...other)
{
   let sum=0;
   for(let i=0;i<other.length;i++)
   {
    sum+=other[i]
   }
   return sum;
}

console.log(sum1(1,2,3,4,5,6))

