const left_ul=document.getElementById("ul-left")
const right_ul=document.getElementById("ul-right")
const toggleButton =document.querySelector(".toggle__button")

toggleButton.addEventListener("click",()=>{
  console.log("entered");
  let vis= left_ul.getAttribute("data-expanded")
  console.log(vis);
  if (vis==="false") {
    left_ul.setAttribute("data-expanded","true")
    right_ul.setAttribute("data-expanded","true")
    toggleButton.setAttribute("aria-expanded","true")
  }
  else if(vis==="true"){
    left_ul.setAttribute("data-expanded","false")
    right_ul.setAttribute("data-expanded","false")
    toggleButton.setAttribute("aria-expanded","false")
  }
})

