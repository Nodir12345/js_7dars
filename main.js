// let arr = [1,3,354,6,2,46,2,5]
// let max = 0 
//  function d (arr){
//   for(i= 0; i< arr.length; i++) 
//   {
//     max += arr[i]
//   }
// }


// let arr = [1,3,354,6,2,46,2,5,]
// let n = 7
// function nodir(arr,n){
//   let sum = 0
//   for (i=0; i<n; i++){
//     sum += arr[i]
//   }
//   return sum
// }
// console.log(nodir(arr,n));
//---------------------------------------------------
// let a = 12;
// let b = 15;
// function f (h,r){
// console.log(h+r);
// }
// f(a,b)

// let a = 30;
// let b = 40 ;
// function gh(a,b){
// return a + b
// }

// let son = gh(a,b)
// console.log(son);


// let a = 8
// let b= 10
// function nodir(a,b){
//   return a+b

// }
// let sum = nodir(a,b)
// console.log(sum);


// let a = "34kljk52ss6stdyjks5758etydjkflswq9597restrjykk54364sls8123754";
// let b = "";
// function d(a){

//   for(i=0;i<a.length;i++){
//     if(a[i]%3==0){
//       b = b + a[i];
//     }
//   }
//   return b;
// }
// console.log(d(a))



// let a = "34kljk52ss6stdyjks5758etydjkflswq9597restrjykk54364sls8123754";
// let sum = ""
// function harf(a,sum){
//   for(i=0; i < a.length ; i++){
//     if(!(a[i]%1==0)){
//       sum+=a[i]
//     }
//   }
//   return sum
// }
// console.log(harf(a,sum));



//  let a = 7
//  let b = ""
//  function n(a){
//   if(a%3==0){
//     console.log("buz");
//   }
//   else if(a%5==0){
//     console.log("fuzz");
//   }
//   else{console.log("buuzfuuz");}
//  }
// n(a)

let about ={
  name:"Nodir",
  age:18,
  manzil: function(){
    let a = "Jasur"
   console.log(this.age,this.name,a);
  }
}
about.manzil()
