const left_ul=document.getElementById("ul-left")
const right_ul=document.getElementById("ul-right")
const navele=document.querySelector(".nav-ele")
const toggleButton =document.querySelector(".toggle__button")

toggleButton.addEventListener("click",()=>{
  console.log("entered");
  let vis= navele.getAttribute("data-expanded")
  console.log(vis);
  if (vis==="false") {
    left_ul.setAttribute("data-expanded","true")
    right_ul.setAttribute("data-expanded","true")
    navele.setAttribute("data-expanded","true")
    toggleButton.setAttribute("aria-expanded","true")
  }
  else if(vis==="true"){
    left_ul.setAttribute("data-expanded","false")
    right_ul.setAttribute("data-expanded","false")
    navele.setAttribute("data-expanded","false")
    toggleButton.setAttribute("aria-expanded","false")
  }
})

