const top5=()=>{
   const btnClose=document.querySelector('header div>svg')
   const row=document.querySelector('header>div')
   btnClose.addEventListener('click',()=>{
    row.computedStyleMap.display='none'
   }) 
}

const quanty=()=>{
const spans=document.querySelectorAll('.quanty span')
span[1].innerHTML="4"
span[0].addEventListener('click',()=>{
    if(Number)(spans[1].innerHTML)-1>=0){
    spans[1].innerHTML=Number(spans[1].innerHTML)-1
    }
}
top5()
quanty()